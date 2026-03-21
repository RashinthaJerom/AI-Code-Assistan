# Quick Reference Guide

**Smart shortcuts and quick info for AI Code Assistant**

---

## 🎯 First Time? Do This:

1. Open `index.html` in web browser
2. Get API key from [openrouter.ai/keys](https://openrouter.ai/keys)
3. Paste API key in app
4. Paste code to analyze
5. Click "Analyze Code"
6. View results on right side

---

## 📋 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Analyze code (fast!) |
| `Cmd+Enter` | Analyze code on Mac |
| Click "Copy" | Copy code blocks |
| `Tab` | Indent in code editor |
| `F12` | Open browser console (debug) |

---

## 🔧 Quick Settings

### Language Selection
```
Auto-detect  ← Let AI guess
JavaScript   ← Explicit choice
Python       ← Explicit choice
(+10 more)
```

### Analysis Options
```
☑ Find Errors        → Detect issues
☑ Fix Code           → Get corrected version
☐ Optimize           → Suggest improvements
☐ Explain            → Understand the code
```

**Tip**: Check only what you need for faster results

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| "Please enter code" | Paste code in editor |
| "Invalid API key" | Get new key from OpenRouter |
| API Error 429 | Wait a minute, rate limited |
| Blank results | Check at least one analysis option |
| Slow response | Try shorter code (~200 lines) |

---

## 💡 Pro Tips

**For Better Results:**
- ✅ Include full code context
- ✅ Use proper indentation
- ✅ Select correct language
- ✅ Enable relevant options only
- ❌ Don't paste broken snippets only

**For Faster Analysis:**
- Use "Find Errors + Fix Code" (uncheck Optimize/Explain)
- Keep code under 500 lines
- Use language auto-detect carefully

**For Complete Analysis:**
- Enable all options
- Include full project context
- Use explicit language selection

---

## 📊 Supported Languages

### Web Development
- JavaScript/TypeScript
- HTML
- CSS

### Backend
- Python
- Java
- C++/C
- C#
- PHP
- Ruby
- Go
- Rust

### Databases
- SQL

### And More!
- 20+ other languages supported

---

## 🎨 Interface Overview

```
┌─────────────────────────────────────────────────────────┐
│         🤖 AI Code Assistant                             │
└─────────────────────────────────────────────────────────┘

┌─ INPUT PANEL ─────────┐  ┌─ RESULTS PANEL ────────┐
│ API Key Input         │  │ Status: Loading...     │
│ Language Selector     │  │                        │
│                       │  │ [Analysis Results here]│
│ [Large Code Editor]   │  │                        │
│                       │  │ [Errors found]         │
│ ⚡ Analyze | Clear    │  │ [Fixed code]           │
└───────────────────────┘  │ [Suggestions]          │
                           └────────────────────────┘
```

---

## 📄 File Reference

| File | Purpose |
|------|---------|
| `index.html` | Main application |
| `script.js` | All the logic |
| `README.md` | Full documentation |
| `QUICKSTART.md` | 5-minute guide |
| `EXAMPLES.md` | Code samples to test |
| `PROJECT_INFO.md` | Technical details |
| `SETUP_INSTRUCTIONS.md` | Installation guide |

---

## 🚀 API Information

| Detail | Value |
|--------|-------|
| Provider | openrouter.ai |
| Model | stepfun/step-3.5-flash |
| Endpoint | api/v1/chat/completions |
| Free Tier | ✅ Available |
| Rate Limit | ~1-5 req/min (free) |

---

## 💰 Cost Estimate

Using `stepfun/step-3.5-flash:free`:
- **Simple analysis** (~100 lines): Free (very cheap)
- **Medium analysis** (~500 lines): Free to $0.01
- **Complex analysis** (~1000+ lines): $0.01 - $0.05

Check [openrouter.ai/pricing](https://openrouter.ai/pricing) for details

---

## ✅ Quality Checklist

Before copying results:
- [ ] Read through all sections
- [ ] Check if fixes make sense
- [ ] Test code if possible
- [ ] Verify optimization suggestions
- [ ] Understand explanations provided

---

## 🎓 Common Code Issues the AI Finds

### Easy to Find:
```
✓ Syntax errors (missing ;, :, etc)
✓ Type errors (string + number)
✓ Undefined variables
✓ Off-by-one errors
```

### Medium Difficulty:
```
✓ Logic errors
✓ Null pointer exceptions
✓ Scope issues
✓ Resource leaks
```

### Hard to Find:
```
✓ Race conditions
✓ Performance bottlenecks
✓ Security vulnerabilities
✓ Design pattern violations
```

---

## 📱 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | ✅ Perfect |
| Firefox | ✅ Perfect |
| Safari | ✅ Perfect |
| Edge | ✅ Perfect |
| Opera | ✅ Perfect |

**Minimum**: ES6 compatible browser (all modern browsers)

---

## 🔐 Security Notes

**Safe:**
- ✅ API key only in browser memory
- ✅ Code sent to OpenRouter only
- ✅ No data stored locally (by default)
- ✅ HTTPS communication

**Risky:**
- ⚠️ Analyze sensitive code
- ⚠️ Share API key
- ⚠️ Run on public computer

**Best Practices:**
- Use dedicated API key
- Regenerate periodically
- Don't commit to git
- Monitor OpenRouter usage

---

## 🆘 Error Messages Guide

| Error | Meaning | Fix |
|-------|---------|-----|
| "Invalid API key" | Key wrong or expired | Get new key |
| "API Error: 429" | Too many requests | Wait 60 seconds |
| "API Error: 500" | OpenRouter down | Try again later |
| "Please enter code" | No code in editor | Paste code |
| "Network error" | Internet issue | Check connection |

---

## 🎯 Use Cases

### ✅ Good Uses:
- Debug your code
- Learn from suggestions
- Optimize performance
- Fix syntax errors
- Understand algorithms
- Code review
- Learn best practices

### ❌ Not Recommended:
- Replace actual testing
- Analyze proprietary code
- Use in critical production
- Copy without understanding
- Bypass security reviews

---

## 💻 System Requirements

| Requirement | Minimum |
|-------------|---------|
| OS | Windows 7, macOS 10.12, Ubuntu 16.04 |
| Browser | Chrome 60, Firefox 55, Safari 11 |
| RAM | 512 MB |
| Disk | 50 KB |
| Internet | 5 Mbps (for API) |

---

## 📊 Performance Expectations

| Code Size | Time to Analyze |
|-----------|-----------------|
| 50 lines | ~1-2 seconds |
| 100 lines | ~2-3 seconds |
| 500 lines | ~5-7 seconds |
| 1000 lines | ~10-15 seconds |
| 2000+ lines | May timeout |

---

## 🌐 Using Offline

**Works Offline:**
- ✅ Code editing
- ✅ Option selection
- ✅ UI interaction

**Needs Internet:**
- ❌ First load (CDN resources)
- ❌ Analysis (OpenRouter API)
- ❌ Syntax highlighting updates

---

## 🔄 Workflow Example

```
1. Open index.html
   ↓
2. Paste API key
   ↓
3. Select language (JavaScript)
   ↓
4. Paste code
   ↓
5. Check: Find Errors + Fix Code
   ↓
6. Click "Analyze Code"
   ↓
7. Wait 2-5 seconds
   ↓
8. View results
   ↓
9. Click "Copy" on fixed code
   ↓
10. Test in your project
```

---

## 🎨 Customization Quick Tips

**Change Color:**
Find `#667eea` in HTML `<style>` tag

**Change Model:**
Find `MODEL_ID` in `script.js`

**Add Language:**
Add `<option>` in HTML select

**Change Temperature:**
Find `temperature: 0.7` in `script.js`

---

## 📞 Quick Links

| Purpose | Link |
|---------|------|
| Get API Key | [openrouter.ai/keys](https://openrouter.ai/keys) |
| Check Models | [openrouter.ai/docs/models](https://openrouter.ai/docs/models) |
| View Pricing | [openrouter.ai/pricing](https://openrouter.ai/pricing) |
| Status Page | [openrouter.ai/status](https://openrouter.ai/status) |

---

## 🚀 Getting Started Checklist

- [ ] Downloaded all files
- [ ] Opened index.html in browser
- [ ] Created OpenRouter account
- [ ] Got API key
- [ ] Pasted API key in app
- [ ] Tried example code
- [ ] Tested with your own code
- [ ] Bookmarked for reference

---

**Remember:** This tool is here to help you learn and write better code! 🎓

For detailed info, see [README.md](README.md) | For examples, see [EXAMPLES.md](EXAMPLES.md)
