# Setup Instructions

Complete setup guide for different scenarios and platforms.

---

## 🚀 Quick Start (30 seconds)

1. **Already downloaded the files?**
   - Right-click `index.html`
   - Select "Open with" → Your browser
   - Done! 🎉

2. **Get an API Key** (takes 5 minutes)
   - Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
   - Sign up if needed
   - Copy your API key
   - Paste it in the app

3. **Start Analyzing!**
   - Paste code into the editor
   - Click "Analyze Code"
   - Get results instantly

---

## 💻 Platform Specific Setup

### Windows Setup

#### Option 1: Direct Browser Open (EASIEST)
```
1. Navigate to: C:\Users\ADMIN\Desktop\ai-practical-4
2. Double-click: index.html
3. Browser opens automatically
4. Done!
```

#### Option 2: PowerShell
```powershell
# Navigate to folder
cd "C:\Users\ADMIN\Desktop\ai-practical-4"

# Open in default browser
start index.html
```

#### Option 3: Start Menu Search
```
1. Press Win + R
2. Type: C:\Users\ADMIN\Desktop\ai-practical-4\index.html
3. Press Enter
```

---

### Mac Setup

#### Option 1: Finder (EASIEST)
```
1. Go to: ~/Desktop/ai-practical-4
2. Right-click index.html
3. Select: Open With → Safari (or Chrome)
4. Done!
```

#### Option 2: Terminal
```bash
# Navigate to folder
cd ~/Desktop/ai-practical-4

# Open in default browser
open index.html

# Or specify browser
open -a "Google Chrome" index.html
open -a Safari index.html
```

---

### Linux Setup

#### Option 1: File Manager
```
1. Navigate to: ~/Desktop/ai-practical-4
2. Double-click: index.html
3. Select browser from menu
```

#### Option 2: Terminal
```bash
# Navigate to folder
cd ~/Desktop/ai-practical-4

# Open in default browser
xdg-open index.html

# Or specific browser
firefox index.html
google-chrome index.html
chromium index.html
```

---

## 🌐 Browser Installation

### Google Chrome
1. Go to [google.com/chrome](https://google.com/chrome)
2. Download and install
3. Open the app

### Firefox
1. Go to [mozilla.org/firefox](https://mozilla.org/firefox)
2. Download and install
3. Open the app

### Safari (Mac only)
- Built-in! Just use Spotlight search

### Microsoft Edge
1. Go to [microsoft.com/edge](https://microsoft.com/edge)
2. Download and install
3. Open the app

---

## 🔑 OpenRouter API Key Setup

### Step 1: Create OpenRouter Account
```
1. Visit: https://openrouter.ai
2. Click "Sign Up"
3. Enter email or use Google/GitHub login
4. Verify email if needed
```

### Step 2: Generate API Key
```
1. Go to: https://openrouter.ai/keys
2. Click "Create Key"
3. Give it a name (e.g., "AI Code Assistant")
4. Copy the key (shown once!)
5. Save it safely
```

### Step 3: Check Your Quota
```
1. Go to: https://openrouter.ai/billing/credits
2. See your remaining free credits
3. Monitor usage
```

### Step 4: Paste Into App
```
1. Open index.html in browser
2. Find: "OpenRouter API Key" field
3. Paste your key
4. Ready to analyze!
```

---

## 📝 File Organization After Download

Expected folder structure:
```
ai-practical-4/
├── index.html              ← Open this file
├── script.js               ← Don't edit (unless advanced)
├── README.md               ← Read for full docs
├── QUICKSTART.md           ← Quick reference
├── EXAMPLES.md             ← Test code examples
├── PROJECT_INFO.md         ← Technical details
├── SETUP_INSTRUCTIONS.md   ← This file
└── .gitignore              ← For version control
```

### File Sizes
- `index.html`: ~15 KB
- `script.js`: ~10 KB
- `README.md`: ~25 KB
- Total: ~50 KB (very small!)

---

## ✅ Verify Installation

### Checklist:

- [ ] All files downloaded
- [ ] `index.html` opens in browser
- [ ] You see the purple gradient background
- [ ] "AI Code Assistant" header visible
- [ ] API Key input field working
- [ ] Code editor textarea present
- [ ] "Analyze Code" button clickable
- [ ] No obvious errors in console (F12)

### Test if Everything Works:

1. Open the app
2. Paste a test API key (doesn't need to be valid yet)
3. Click "Analyze Code" with no code
4. Should show: "Please enter some code to analyze"

If you see error messages, check the browser console (F12 → Console tab).

---

## 🛠️ Customization

### Change the Default Language

**File**: `index.html`  
**Find**: `<select id="language">`  
**Change**: The `value="auto"` in the first option

### Change Colors

**File**: `index.html`  
**Find**: `<style>` section  
**Look for**: `#667eea` (main purple color)  
**Change to**: Any hex color (e.g., `#3b82f6` for blue)

### Change Model

**File**: `script.js`  
**Find**: `MODEL_ID: 'stepfun/step-3.5-flash:free'`  
**Change to**: Another OpenRouter model

Available models: [https://openrouter.ai/docs/models](https://openrouter.ai/docs/models)

---

## 🐛 Troubleshooting Setup

### Issue: Browser Won't Open HTML File

**Solution:**
```
1. Right-click index.html
2. Select "Open with"
3. Choose your browser
4. Or drag index.html into browser window
```

### Issue: Blank White Page

**Solution:**
```
1. Press F5 to refresh
2. Check Console (F12) for errors
3. Try different browser
4. Clear browser cache
```

### Issue: "Cannot find module" or Script Errors

**Solution:**
```
1. Check all files are downloaded
2. Verify filenames match exactly
3. Don't rename files
4. Keep all files in same folder
```

### Issue: API Connection Error

**Solution:**
```
1. Check API key is correct
2. Make sure you have internet
3. Try a different browser
4. Check OpenRouter status
```

---

## 📂 Hosting Options

### Option 1: Local Only (Current Setup)
- Just open `index.html`
- Works completely locally
- No server needed
- No internet needed after loading (except API calls)

### Option 2: GitHub Pages (Free)

```bash
# 1. Create GitHub account (if not already)
# 2. Create new repository named: ai-code-assistant
# 3. Upload all files to the repository
# 4. Go to Settings → Pages
# 5. Select "main" branch as source
# 6. Access at: https://yourusername.github.io/ai-code-assistant

# Command line (if using git):
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ai-code-assistant.git
git push -u origin main
```

### Option 3: Netlify (Free)

```
1. Go to netlify.com
2. Sign up (free)
3. Drag and drop folder
4. Get instant URL
5. Share with anyone
```

### Option 4: DigitalOcean / AWS / VPS

```
1. Get any web server
2. Upload files to /var/www/html or similar
3. Access via your domain
4. Can add SSL certificate
```

---

## 🔒 Security Best Practices

### For Local Development:
✅ API key only in browser memory
✅ Never commit to git
✅ Use different key than production

### If You Share the Code:
❌ Don't include API keys in files
✅ Add `.env` to `.gitignore`
✅ Tell users to get their own API key
✅ Add instructions for setup

### For Production Deployment:
❌ Don't hardcode API key
✅ Use environment variables
✅ Use backend API (not browser direct)
✅ Implement rate limiting
✅ Add authentication

---

## 📊 Storage Requirements

- **Disk Space**: ~50 KB (HTML + JS + docs)
- **Browser Cache**: ~1 MB
- **Memory**: ~50 MB while running
- **Internet**: Required for API calls only

---

## 🌍 Internet Requirements

### What Needs Internet:
- API calls to OpenRouter (required)
- Initial page load (CDN for Tailwind, Highlight.js)

### What Works Offline:
- Editing code
- Syntax checking
- Local features

### First Load:
- Downloads ~500 KB of libraries from CDN
- After that, some caching
- Subsequent loads faster

---

## 📱 Mobile/Tablet Support

The app is responsive! But:

### Desktop (BEST)
- Full feature set
- Easy typing
- All buttons easily clickable

### Tablet (GOOD)
- Landscape orientation recommended
- Touch-friendly buttons
- Readable code display

### Phone (WORKS)
- Use landscape mode
- Smaller text
- Limited code display

### Not Recommended:
- Very small screens (<350px)
- Limited input area

---

## ⚙️ System Requirements

### Minimum:
- OS: Windows 7+, macOS 10.12+, Ubuntu 16.04+
- Browser: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- RAM: 512 MB
- Internet: Broadband (5 Mbps+)

### Recommended:
- OS: Windows 10+, macOS 10.15+, Ubuntu 20.04+
- Browser: Latest version
- RAM: 2 GB+
- Internet: Fast (10+ Mbps)

### Storage:
- Download: 50 KB
- Extracted: 50 KB
- Total: ~1 MB with node_modules (if deployed)

---

## ❓ FAQ

**Q: Do I need Node.js?**  
A: No! It's pure JavaScript that runs in browser.

**Q: Do I need to build anything?**  
A: No! Just open index.html.

**Q: Can I use it offline?**  
A: First load needs internet for CSS/JS libraries. Then API calls need internet.

**Q: Is my code saved?**  
A: No. Nothing is stored locally (optional localStorage in future).

**Q: Is my API key safe?**  
A: Only in your browser memory. Not saved anywhere.

**Q: Can I share this with friends?**  
A: Yes! They just need to provide their own OpenRouter API key.

**Q: What if I break something?**  
A: Just reload the page - everything resets.

**Q: Can I modify the code?**  
A: Yes! Feel free to customize for your needs.

---

## 🎓 Next Steps After Setup

1. **Read QUICKSTART.md** - Learn basics in 5 minutes
2. **Try EXAMPLES.md** - Test with ready-made code
3. **Read README.md** - Full documentation
4. **Explore PROJECT_INFO.md** - Technical details
5. **Start analyzing** - Use your own code!

---

## 💡 Pro Tips

1. **Bookmark index.html** - Quick access
2. **Create shortcut** - Windows: right-click → "Create shortcut"
3. **Test first** - Try example code before your code
4. **Save API key** - In password manager
5. **Check quota** - Monitor OpenRouter usage
6. **Keep code concise** - Better analysis faster
7. **Use proper language selection** - Better results

---

## 📞 Support

### If Something Goes Wrong:

1. **Browser Console**: F12 → Console tab
2. **Clear Cache**: Ctrl+Shift+Delete (most browsers)
3. **Try Different Browser**: Verify it's not browser-specific
4. **Check Internet**: Verify OpenRouter is reachable
5. **Verify API Key**: Test at https://openrouter.ai

### Useful Debugging:
```javascript
// In browser console (F12):
typeof fetch  // Should be "function"
navigator.onLine  // Should be true
```

---

**Ready to analyze code? Open index.html and get started! 🚀**

Need help? Check [README.md](README.md) for detailed documentation.
