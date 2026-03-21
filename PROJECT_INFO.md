# Project Structure & Configuration

## File Organization

```
ai-practical-4/
├── index.html           # Main HTML file - open this in browser!
├── script.js            # JavaScript logic & API integration
├── README.md            # Complete documentation
├── QUICKSTART.md        # Quick start guide with examples
├── EXAMPLES.md          # Code examples for testing
├── PROJECT_INFO.md      # This file - project structure & config
└── .gitignore          # (Optional) Git ignore file
```

## File Descriptions

### index.html (Main Application)
- Single-file HTML with embedded Tailwind CSS
- Responsive UI with glassmorphism design
- Two-column layout (Input | Results)
- Syntax highlighting with Highlight.js
- Dark theme optimized for developers

**Key Sections:**
- API Key input field
- Language selector (12+ languages)
- Code editor textarea
- Analysis options (Find Errors, Fix Code, Optimize, Explain)
- Results display area
- Error handling alerts

### script.js (Application Logic)
- Pure vanilla JavaScript (no frameworks!)
- OpenRouter API integration
- Prompt engineering for code analysis
- Result parsing and display
- Syntax highlighting management
- Error handling and validation

**Key Functions:**
- `analyzeCode()` - Main analysis trigger
- `callOpenRouterAPI()` - API communication
- `buildPrompt()` - Creates smart analysis prompts
- `displayResults()` - Formats and displays results
- `copyToClipboard()` - Copy functionality

### Supporting Documentation
- **README.md** - Full documentation, troubleshooting, features
- **QUICKSTART.md** - 5-minute setup guide with examples
- **EXAMPLES.md** - Code examples for testing each language
- **PROJECT_INFO.md** - This file, technical details

## Configuration

### API Configuration (in script.js)
```javascript
const CONFIG = {
    API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL_ID: 'stepfun/step-3.5-flash:free'
};
```

To change the model:
1. Open `script.js`
2. Find the `CONFIG` object (line ~1)
3. Change `MODEL_ID` to a different model
4. Available models at [https://openrouter.ai/docs/models](https://openrouter.ai/docs/models)

### Tailwind CSS Configuration
- Using CDN version (no build step needed)
- Dark theme with purple gradients
- Custom CSS in `<style>` tag for special effects

## API Integration Details

### Request Flow
```
User Input
    ↓
Validate (API key, code, language)
    ↓
Build Analysis Prompt
    ↓
Send to OpenRouter API
    ↓
Receive Analysis Response
    ↓
Parse & Format Results
    ↓
Display in UI
```

### Headers Sent to OpenRouter
```javascript
{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiKey,
    'HTTP-Referer': window.location.origin,
    'X-Title': 'AI Code Assistant'
}
```

### Prompt Structure
The app creates intelligent prompts like:
```
You are an expert code analyzer...
Analyze the following [language] code:
```[code]```

Please:
1. Find and list all errors, bugs, and potential issues
2. Provide the corrected/fixed version of the code
3. Suggest optimizations for better performance
4. Explain what the code does
```

## Customization Guide

### Change the Model
**Location**: Line ~10 in `script.js`
```javascript
MODEL_ID: 'stepfun/step-3.5-flash:free'  // Change this line
```

Other popular models on OpenRouter:
- `gpt-4-turbo` - Most powerful
- `gpt-3.5-turbo` - Fast and affordable
- `claude-3-opus` - Excellent reasoning
- `mistral-large` - Good balance

### Change Colors & Theme
**Location**: `<style>` section in `index.html`

Key colors to modify:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Main gradient - Line ~19 */
border: 2px solid #667eea;     /* Input borders */
background-color: #1e1e1e;     /* Code editor background */
```

### Change Default Temperature
**Location**: Line ~90 in `script.js`
```javascript
temperature: 0.7,  // Higher = more creative, Lower = more focused
```

### Add More Languages
**Location**: `<select id="language">` in `index.html`
```html
<option value="rust" class="text-gray-900">Rust</option>
<!-- Add new options here -->
<option value="kotlin" class="text-gray-900">Kotlin</option>
```

## Browser Compatibility

| Browser | Status | Notes |
|---------|--------|-------|
| Chrome | ✅ Full | Recommended |
| Firefox | ✅ Full | Excellent support |
| Safari | ✅ Full | Works great on Mac/iOS |
| Edge | ✅ Full | Windows 10+ |
| Opera | ✅ Full | Chromium-based |

**Minimum Requirements:**
- ES6 JavaScript support (all modern browsers)
- CSS Grid support
- Fetch API support
- LocalStorage support (optional)

## Performance Considerations

### User-Side
- No build/compilation step
- Opens instantly (pure browser)
- Minimal memory footprint
- Fast response with free model

### API-Side (OpenRouter)
- stepfun/step-3.5-flash is optimized for speed
- Good accuracy for code analysis
- Free tier available
- Rate limits apply to free users

### Optimization Tips
1. **Shorter code = Faster response**
   - 100 lines: ~2-3 seconds
   - 500 lines: ~5-7 seconds
   - 1000+ lines: ~10-15 seconds

2. **Fewer analyses = Faster response**
   - Only enable what you need
   - Uncheck "Optimize" or "Explain" if not needed

3. **API Key Efficiency**
   - Reuse same key within session
   - Keep key in memory (current implementation)

## Security Considerations

### What's Secure
✅ API key only used for OpenRouter auth
✅ No server-side storage
✅ No cookies or tracking
✅ HTTPS only (if hosted)
✅ Browser-side processing

### What's Exposed
⚠️ Code sent to OpenRouter servers
⚠️ OpenRouter logs may keep copies (check their privacy policy)
⚠️ API key visible in browser memory
⚠️ No encryption between you and API

### Best Practices
1. Use a dedicated API key for this app
2. Don't analyze highly sensitive code
3. Trust OpenRouter's data handling
4. Regenerate key monthly
5. Don't commit API key to version control

## Extending the Application

### Add New Features

**1. Save Analysis History**
```javascript
// Store in localStorage
localStorage.setItem('analysis_history', JSON.stringify(results));
```

**2. Code Snippet Library**
```javascript
const snippets = {
    'Hello World JS': 'console.log("Hello");',
    'Loop Python': 'for i in range(10): print(i)'
};
```

**3. Dark/Light Mode Toggle**
```javascript
function toggleTheme() {
    document.body.style.background = ...;
}
```

**4. Export Results**
```javascript
function exportAsMarkdown() {
    // Convert results to markdown
    // Download file
}
```

## Debugging Tips

### Check API Connection
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for error messages
4. Check Network tab for API calls

### Common Issues
- **401 Unauthorized**: Invalid API key
- **429 Too Many Requests**: Rate limited
- **500 Server Error**: OpenRouter issue
- **CORS Error**: Browser security (shouldn't happen with OpenRouter)

### Enable Debug Logging
Add to `script.js` at the top of `callOpenRouterAPI()`:
```javascript
console.log('API Request:', { code, language, options });
console.log('Response:', data);
```

## Deployment Options

### Local Browser
- No setup needed
- `index.html` → Browser
- fastest & easiest

### GitHub Pages
- Upload files to GitHub
- Enable Pages in settings
- Access via: `username.github.io/repo`

### Web Server (Nginx/Apache)
- Copy files to web root
- Access via: `yourdomain.com`

### Docker Container
```dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
```

## Version History

**v1.0 (Current)**
- ✅ Core code analysis
- ✅ Error detection & fixing
- ✅ Code optimization
- ✅ Multi-language support
- ✅ Beautiful UI
- ✅ Copy to clipboard
- ✅ Syntax highlighting

**Future v1.1**
- 📝 Save analysis history
- 📁 Multiple file upload
- 🎨 Theme switcher
- 📊 Code metrics
- 🔄 Git integration

## Support & Resources

**Documentation:**
- [README.md](README.md) - Full docs
- [QUICKSTART.md](QUICKSTART.md) - Quick guide
- [EXAMPLES.md](EXAMPLES.md) - Code examples

**External Resources:**
- [OpenRouter AI Docs](https://openrouter.ai/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Highlight.js Documentation](https://highlightjs.org/)

**Getting Help:**
- Check error message in red box
- Review troubleshooting section in README
- Test with example code from EXAMPLES.md

---

**Technical Stats:**
- Lines of HTML: ~300
- Lines of JavaScript: ~250
- External Dependencies: 3 (Tailwind, Highlight.js, OpenRouter API)
- No Build Step Required: ✅
- Framework Used: None (Vanilla JavaScript)
- Browser Compatibility: 95%+ of users

---

Last Updated: March 2026
