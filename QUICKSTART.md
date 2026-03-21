# Quick Start Guide - AI Code Assistant

## 5-Minute Setup

### Step 1: Get Your API Key (2 minutes)
1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Sign up with email or existing account
3. Copy your API key
4. Keep it safe! Don't share it

### Step 2: Open the App (1 minute)
- Open `index.html` in any web browser
- That's it! No installation needed.

### Step 3: Start Analyzing (2 minutes)
1. Paste your API key in the first field
2. Paste your code to analyze
3. Click "Analyze Code"
4. See instant results!

---

## Example Analysis Sessions

### Session 1: Finding Bugs in JavaScript

**What to paste in Code Editor:**
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 1]));
```

**Expected Analysis:**
- ✓ Find the off-by-one error
- ✓ Show the fixed version
- ✓ Explain the issue
- ✓ Suggest improvements

---

### Session 2: Python Code Review

**What to paste:**
```python
def calculate_average(numbers):
    total = 0
    for num in numbers
        total = total + num
    average = total / len(numbers)
    return average

result = calculate_average([10, 20, 30])
print("Average: " + result)
```

**Expected Analysis:**
- ✓ Missing colon on line 4
- ✓ Type error mixing string and number
- ✓ Improved version
- ✓ Best practices

---

### Session 3: Code Optimization

**What to paste:**
```python
# Check if all elements are even
def check_all_even(numbers):
    for num in numbers:
        if num % 2 != 0:
            return False
    return True
```

**Options to Select:**
- ☐ Find Errors (uncheck)
- ☐ Fix Code (uncheck)
- ✓ Optimize (CHECK)
- ✓ Explain (CHECK)

**Expected Results:**
- More Pythonic versions
- Performance tips
- Explanation of different approaches

---

## Common Use Cases

### 1. Debug Existing Code
- Enable: Find Errors + Fix Code
- Disable: Optimize + Explain
- Fast analysis of what's wrong

### 2. Learn & Understand
- Enable: Explain + Fix Code
- Disable: Optimize
- Good for learning what works and why

### 3. Complete Review
- Enable: All options
- Takes longer but comprehensive
- Best for critical code

### 4. Performance Tuning
- Enable: Optimize + Explain
- Disable: Find Errors (if no bugs)
- Focus on speed and efficiency

---

## Supported Languages

| Language | Status | Example |
|----------|--------|---------|
| JavaScript | ✅ Excellent | `function test() {...}` |
| Python | ✅ Excellent | `def test(): ...` |
| Java | ✅ Great | `public class Test {...}` |
| C++ | ✅ Great | `int main() {...}` |
| C# | ✅ Great | `class Test {...}` |
| PHP | ✅ Good | `<?php function test() {...}` |
| Ruby | ✅ Good | `def test; end` |
| Go | ✅ Good | `func main() {...}` |
| SQL | ✅ Good | `SELECT * FROM table;` |
| HTML/CSS | ✅ Good | `<div>...</div>` |

---

## Tips for Best Results

### ✅ Do This:
```
✓ Provide complete, runnable code
✓ Include all necessary imports/dependencies
✓ Use proper indentation
✓ Comment complex sections
✓ Specify the programming language
```

### ❌ Don't Do This:
```
✗ Only snippets without context
✗ Pseudocode or incomplete code
✗ Inconsistent formatting
✗ Generic variable names only (x, y, z)
✗ Let it guess the language (specify it!)
```

---

## API Key Best Practices

### Security:
1. ✅ Use unique key for this app
2. ✅ Regenerate if accidentally exposed
3. ✅ Use browser's password manager to store
4. ✅ Don't commit API key to git
5. ❌ Don't share your API key

### Usage:
1. Monitor your OpenRouter account for quota
2. Start with free tier to test
3. Check rate limits if getting errors
4. Free tier users: 1-5 requests per minute

---

## Troubleshooting Table

| Issue | Solution |
|-------|----------|
| Browser won't open file | Try `file:///path/to/index.html` in address bar |
| Invalid API key | Go to [openrouter.ai/keys](https://openrouter.ai/keys) and get a fresh key |
| API Error 429 | Too many requests - wait a minute or upgrade account |
| No results showing | Select at least one analysis option (Find Errors/Fix Code/etc) |
| Syntax highlighting missing | Normal - code is still analyzed correctly |
| Slow response | Large code or high OpenRouter load - try shorter code first |

---

## Real-World Examples

### Before & After: JavaScript Bug

**BEFORE:**
```javascript
function multiply(a, b) {
  return a * b + 5;  // Wrong! Extra addition
}
```

**AFTER (AI Fixed):**
```javascript
function multiply(a, b) {
  return a * b;
}
```

---

### Before & After: Python Optimization

**BEFORE (Inefficient):**
```python
numbers = [1, 2, 3, 4, 5]
squared = []
for num in numbers:
    squared.append(num * num)
```

**AFTER (Optimized):**
```python
numbers = [1, 2, 3, 4, 5]
squared = [num * num for num in numbers]  # List comprehension
```

---

## Feature Highlights

### 🎨 Beautiful Dark UI
- Easy on the eyes for long sessions
- Modern gradient design
- Glowing effects

### ⚡ Instant Feedback
- Real-time error messages
- Loading indicators
- Copy button appears on hover

### 🔤 Syntax Highlighting
- Beautiful code display
- Automatic language detection
- Multiple color schemes

### 📱 Responsive Design
- Works on phone, tablet, desktop
- Touch-friendly buttons
- Adapts to screen size

---

## Next Steps

1. **Open index.html** → Nothing to install!
2. **Get API key** → 2 minutes at openrouter.ai
3. **Paste code** → Try an example above
4. **Analyze** → See AI magic happen
5. **Copy results** → Use improved code immediately

---

**Common First Attempt:**
```javascript
// Paste this to test:
function add(a, b) {
  return a + b
}  // Missing semicolon

console.log(add(5, 3));
```

Then click **Analyze Code** and watch the AI find and fix the issue!

---

## Keyboard Shortcuts

- **Ctrl+Enter** (Windows) or **Cmd+Enter** (Mac) = Analyze immediately
- **Click "Copy"** on any code block = Copy to clipboard

---

Happy Coding! 🚀

Questions? Check the [README.md](README.md) for more details.
