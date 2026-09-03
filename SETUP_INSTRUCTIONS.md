# Google Sheets Backend Integration Guide

## ✅ Files Created/Updated

1. **index.html** - Updated with Google Sheets sync functionality
2. **Code.gs** - Complete Google Apps Script backend code

---

## 🚀 Setup Instructions

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "+ Blank" to create a new spreadsheet
3. Name it: **"Student Assessment DB"**

### Step 2: Add Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Open the `Code.gs` file from this workspace
4. Copy ALL the code and paste it into the Apps Script editor
5. Click the 💾 **Save** icon (or Ctrl+S)

### Step 3: Deploy as Web App
1. Click **"Deploy"** button (top right)
2. Select **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**
5. Fill in:
   - **Description**: "Student Assessment API"
   - **Execute as**: "Me" (your email address)
   - **Who has access**: **"Anyone"** ⚠️ (This is critical!)
6. Click **"Deploy"**
7. Authorize the script when prompted (may show "Google hasn't verified this app" - click Advanced > Go to... )
8. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/....../exec`)

### Step 4: Connect Front-end
1. Open `index.html` in your text editor
2. Find line ~455: `const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";`
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your copied Web App URL
4. Save the file

### Step 5: Test It!
1. Open `index.html` in your browser
2. You should see a sync status indicator at bottom-right
3. Add/edit student data
4. Watch for "Syncing to Google Sheets..." then "Saved to Google Sheets!" message
5. Check your Google Sheet - data should appear automatically!

---

## 📊 How It Works

### Data Flow
```
User enters score → index.html saves to localStorage 
                  → Also sends to Google Sheets via fetch()
                  → Code.gs receives POST request
                  → Updates "Students" sheet with all data
                  
Page reload → index.html requests data from Google Sheets
            → Code.gs returns JSON with all students
            → Frontend populates tables automatically
```

### Sheets Created Automatically
The script will create these tabs in your Google Sheet:
- **Students** - Main data (ID, Name, all scores as JSON arrays)
- **PBL** - Worksheet & Answer Key URLs
- **Homework** - Worksheet & Answer Key URLs  
- **Participation** - Reserved for future use
- **Quizzes** - Reserved for future use
- **Listening** - Reserved for future use
- **Reading** - Reserved for future use
- **Reports** - Reserved for issue tracking

---

## 🔧 Features

### Automatic Sync
- Every time you save data (add student, update score), it syncs to Google Sheets
- Visual indicators show sync status:
  - 🟡 Yellow: "Syncing to Google Sheets..."
  - 🟢 Green: "Saved to Google Sheets!"
  - 🔴 Red: "Sync failed - saved locally only"

### Offline Support
- If Google Sheets is unavailable, data still saves to localStorage
- You'll see an error message but won't lose data
- Next successful sync will update the cloud

### Multi-Device Access
- Open `index.html` on any device
- As long as SCRIPT_URL is set, all devices share the same data
- Perfect for teachers using multiple computers/tablets

---

## 🛠 Troubleshooting

### "Sync failed" error
- Check that SCRIPT_URL is correctly pasted in index.html
- Verify deployment settings: Who has access = "Anyone"
- Check browser console (F12) for detailed errors

### Data not appearing in Google Sheet
- Make sure you authorized the script properly
- Check if sheets were created (Extensions > Apps Script > Executions to see logs)
- Try manual trigger: In Apps Script, run `initializeSheets()` function once

### CORS errors in console
- This is normal with `no-cors` mode
- The sync still works even if you see these warnings
- The opaque response is expected behavior

### "Invalid deployment" error
- Re-deploy the web app (Deploy > Manage deployments > Edit > New version)
- Ensure "Execute as" is set to "Me"

---

## 📝 Maintenance

### Backup Your Data
- Google Sheets IS your backup now!
- But also use "Save Document" (JSON export) periodically
- File > Download in Google Sheets for Excel backup

### Update Script
If you need to modify the backend:
1. Edit `Code.gs` in Apps Script editor
2. Save
3. Deploy > Manage deployments > Edit > Version: New version
4. Deploy again

### Reset Everything
1. Delete all sheets in Google Sheet (except first one)
2. Refresh your browser page
3. Script will recreate all sheets automatically

---

## 🔐 Security Notes

- **Who has access: Anyone** means anyone with the URL can read/write data
- This is acceptable for classroom use where the URL is private
- For enhanced security, you could:
  - Use "Anyone with Google account" instead
  - Add simple password check in the script
  - Restrict to specific domain (if using Google Workspace)

---

## 📞 Need Help?

Check the browser console (F12 > Console tab) for detailed error messages. Common issues:
- Network errors = Internet connection problem
- 401/403 errors = Deployment permissions wrong
- JSON parse errors = Corrupted data in sheet

Your system is now ready for live multi-device classroom use! 🎉
