// Configuration
const CONFIG = {
    API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL_ID: 'stepfun/step-3.5-flash:free',
    STORAGE_KEY: 'openrouter_api_key'
};

// DOM Elements
const languageSelect = document.getElementById('language');
const codeInput = document.getElementById('codeInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const clearBtn = document.getElementById('clearBtn');
const loadingState = document.getElementById('loadingState');
const resultsContainer = document.getElementById('resultsContainer');
const errorAlert = document.getElementById('errorAlert');
const errorMessage = document.getElementById('errorMessage');
const findErrorsCheckbox = document.getElementById('findErrors');
const fixCodeCheckbox = document.getElementById('fixCode');
const optimizeCheckbox = document.getElementById('optimize');
const explainCheckbox = document.getElementById('explain');

// Modal Elements
const apiKeyModal = document.getElementById('apiKeyModal');
const modalApiKeyInput = document.getElementById('modalApiKeyInput');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const modalSkipBtn = document.getElementById('modalSkipBtn');
const modalError = document.getElementById('modalError');
const changeKeyBtn = document.getElementById('changeKeyBtn');

// Event Listeners
analyzeBtn.addEventListener('click', analyzeCode);
clearBtn.addEventListener('click', clearForm);
modalSaveBtn.addEventListener('click', saveApiKeyFromModal);
modalSkipBtn.addEventListener('click', closeApiKeyModal);
changeKeyBtn.addEventListener('click', openChangeApiKeyModal);

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeApp);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape' && apiKeyModal.classList.contains('active')) {
        closeApiKeyModal();
    }
    
    // Enter in modal to save
    if (e.key === 'Enter' && apiKeyModal.classList.contains('active')) {
        e.preventDefault();
        saveApiKeyFromModal();
    }
    
    // Ctrl/Cmd + Enter to analyze code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !apiKeyModal.classList.contains('active')) {
        analyzeCode();
    }
});

// Initialize App - Load stored API key and show modal if needed
function initializeApp() {
    const storedApiKey = getApiKeyFromStorage();
    
    if (storedApiKey) {
        closeApiKeyModal();
    } else {
        showApiKeyModal();
    }
}

// Local Storage Functions
function getApiKeyFromStorage() {
    try {
        return localStorage.getItem(CONFIG.STORAGE_KEY) || null;
    } catch (e) {
        console.warn('localStorage not available:', e);
        return null;
    }
}

function saveApiKeyToStorage(apiKey) {
    try {
        const keyToSave = apiKey || '';
        if (keyToSave && keyToSave.trim()) {
            localStorage.setItem(CONFIG.STORAGE_KEY, keyToSave.trim());
            return true;
        }
    } catch (e) {
        console.warn('Failed to save to localStorage:', e);
        showModalError('Failed to save API key to browser storage');
        return false;
    }
}

function clearApiKeyFromStorage() {
    try {
        localStorage.removeItem(CONFIG.STORAGE_KEY);
    } catch (e) {
        console.warn('Failed to clear localStorage:', e);
    }
}

// Modal Functions
function showApiKeyModal() {
    apiKeyModal.classList.add('active');
    modalApiKeyInput.focus();
}

function closeApiKeyModal() {
    apiKeyModal.classList.remove('active');
    clearModalError();
}

function saveApiKeyFromModal() {
    const apiKey = modalApiKeyInput.value.trim();
    
    if (!apiKey) {
        showModalError('Please enter an API key');
        return;
    }
    
    if (apiKey.length < 10) {
        showModalError('API key seems too short. Please check it.');
        return;
    }
    
    if (saveApiKeyToStorage(apiKey)) {
        closeApiKeyModal();
        showSuccess('API key saved successfully!');
    }
}

function showModalError(message) {
    modalError.textContent = message;
    modalError.classList.add('show');
}

function clearModalError() {
    modalError.textContent = '';
    modalError.classList.remove('show');
    modalApiKeyInput.value = '';
}

function showSuccess(message) {
    // Show temporary success message
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #10b981; color: white; padding: 16px 24px; border-radius: 8px; z-index: 2000; box-shadow: 0 4px 12px rgba(0,0,0,0.2);';
    tempDiv.textContent = message;
    document.body.appendChild(tempDiv);
    
    setTimeout(() => {
        tempDiv.style.opacity = '0';
        tempDiv.style.transition = 'opacity 0.3s';
        setTimeout(() => tempDiv.remove(), 300);
    }, 2000);
}

function openChangeApiKeyModal() {
    const currentKey = getApiKeyFromStorage();
    modalApiKeyInput.value = currentKey || '';
    clearModalError();
    showApiKeyModal();
}

// Main Analysis Function
async function analyzeCode() {
    const code = codeInput.value.trim();
    const apiKey = getApiKeyFromStorage();
    const language = languageSelect.value;

    // Validation
    if (!apiKey) {
        showError('Please set your API key first. Click the modal to enter it.');
        showApiKeyModal();
        return;
    }

    if (!code) {
        showError('Please enter some code to analyze');
        return;
    }

    // Get selected analysis options
    const options = {
        findErrors: findErrorsCheckbox.checked,
        fixCode: fixCodeCheckbox.checked,
        optimize: optimizeCheckbox.checked,
        explain: explainCheckbox.checked
    };

    // Show loading state
    showLoading();

    try {
        const analysis = await callOpenRouterAPI(code, language, apiKey, options);
        displayResults(analysis, code);
    } catch (error) {
        showError(error.message);
    }
}

// Call OpenRouter API
async function callOpenRouterAPI(code, language, apiKey, options) {
    const prompt = buildPrompt(code, language, options);

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'AI Code Assistant'
            },
            body: JSON.stringify({
                model: CONFIG.MODEL_ID,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 4000
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Invalid API response format');
        }

        return data.choices[0].message.content;
    } catch (error) {
        if (error.message.includes('API Error')) {
            throw error;
        }
        throw new Error(`Failed to connect to API: ${error.message}`);
    }
}

// Build Analysis Prompt
function buildPrompt(code, language, options) {
    let prompt = `You are an expert code analyzer and debugger. Analyze the following ${language === 'auto' ? 'code' : language} code:\n\n\`\`\`\n${code}\n\`\`\`\n\n`;

    const tasks = [];
    
    if (options.findErrors) {
        tasks.push('1. Find and list all errors, bugs, and potential issues');
    }
    if (options.fixCode) {
        tasks.push('2. Provide the corrected/fixed version of the code');
    }
    if (options.optimize) {
        tasks.push('3. Suggest optimizations for better performance and code quality');
    }
    if (options.explain) {
        tasks.push('4. Explain what the code does and any improvements made');
    }

    if (tasks.length === 0) {
        prompt += 'Please analyze this code and provide insights.';
    } else {
        prompt += 'Please:\n' + tasks.join('\n');
    }

    prompt += '\n\nFormat your response with clear sections using markdown headers (##). For code blocks, use proper code formatting with syntax highlighting.';

    return prompt;
}

// Display Results
function displayResults(analysis, originalCode) {
    resultsContainer.innerHTML = '';
    hideLoading();

    // Parse and display analysis sections
    const sections = analysis.split(/##\s+/);
    
    sections.forEach((section, index) => {
        if (!section.trim()) return;

        // Split section title from content
        const lines = section.split('\n');
        const title = lines[0] || 'Analysis';
        const content = lines.slice(1).join('\n').trim();

        // Create section element
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20';

        // Add section title
        const titleDiv = document.createElement('h3');
        titleDiv.className = 'text-lg font-bold text-white mb-3 flex items-center gap-2';
        
        // Add icon based on section type
        let icon = '📋';
        if (title.toLowerCase().includes('error') || title.toLowerCase().includes('issue')) {
            icon = '❌';
        } else if (title.toLowerCase().includes('fixed') || title.toLowerCase().includes('correct')) {
            icon = '✅';
        } else if (title.toLowerCase().includes('optimiz')) {
            icon = '⚡';
        } else if (title.toLowerCase().includes('explain')) {
            icon = '📚';
        }

        titleDiv.innerHTML = `<span>${icon}</span><span>${title}</span>`;
        sectionDiv.appendChild(titleDiv);

        // Parse and display content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'text-gray-200 text-sm space-y-3';

        // Handle code blocks
        const codeBlockRegex = /```([\w]*)\n([\s\S]*?)```/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = codeBlockRegex.exec(content)) !== null) {
            // Add text before code block
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: content.substring(lastIndex, match.index)
                });
            }

            // Add code block
            parts.push({
                type: 'code',
                language: match[1] || 'plaintext',
                content: match[2]
            });

            lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < content.length) {
            parts.push({
                type: 'text',
                content: content.substring(lastIndex)
            });
        }

        // Render parts
        parts.forEach(part => {
            if (part.type === 'text') {
                const p = document.createElement('div');
                p.className = 'whitespace-pre-wrap';
                p.textContent = part.content.trim();
                contentDiv.appendChild(p);
            } else if (part.type === 'code') {
                const codeDiv = document.createElement('div');
                codeDiv.className = 'code-block relative mt-2';

                // Create code element
                const pre = document.createElement('pre');
                const code = document.createElement('code');
                code.className = `language-${part.language}`;
                code.textContent = part.content.trim();
                pre.appendChild(code);

                // Add copy button
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-btn';
                copyBtn.textContent = 'Copy';
                copyBtn.addEventListener('click', () => copyToClipboard(part.content.trim(), copyBtn));

                codeDiv.appendChild(copyBtn);
                codeDiv.appendChild(pre);
                contentDiv.appendChild(codeDiv);

                // Highlight code
                setTimeout(() => {
                    try {
                        hljs.highlightElement(code);
                    } catch (e) {
                        console.log('Syntax highlighting skipped for unknown language');
                    }
                }, 0);
            }
        });

        sectionDiv.appendChild(contentDiv);
        resultsContainer.appendChild(sectionDiv);
    });

    hideError();
}

// Copy to Clipboard
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.opacity = '1';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showError('Failed to copy to clipboard');
    });
}

// UI Helper Functions
function showLoading() {
    loadingState.classList.remove('hidden');
    resultsContainer.innerHTML = '';
    hideError();
}

function hideLoading() {
    loadingState.classList.add('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorAlert.classList.remove('hidden');
    loadingState.classList.add('hidden');
    resultsContainer.innerHTML = '';
}

function hideError() {
    errorAlert.classList.add('hidden');
}

function clearForm() {
    codeInput.value = '';
    resultsContainer.innerHTML = `<div class="text-gray-300 text-center py-12">
        <p class="text-lg">👈 Enter code and click "Analyze Code" to get started</p>
    </div>`;
    hideError();
}
