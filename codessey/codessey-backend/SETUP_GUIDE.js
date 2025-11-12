/**
 * Setup Guide for Codessey Contact Form API
 * Follow these steps to get started
 */

console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║         🎯 Codessey Contact Form API - Setup Instructions                ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝

📋 STEP 1: Configure Environment Variables
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Edit the .env file and update these settings:

1. MongoDB Configuration:
   MONGODB_URI=mongodb://localhost:27017/codessey
   (या अगर MongoDB Atlas use कर रहे हो तो connection string update करो)

2. Email Configuration (Gmail):
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   
   ⚠️  IMPORTANT: Use App Password, not regular password!
   
   📱 How to get Gmail App Password:
   1. Go to: https://myaccount.google.com/security
   2. Enable "2-Step Verification"
   3. Go to: https://myaccount.google.com/apppasswords
   4. Select "Mail" and device
   5. Copy the generated 16-character password
   6. Paste it in EMAIL_PASSWORD

3. Receiver Email:
   RECEIVER_EMAIL=campaignwalatech@gmail.com
   (This is where contact form emails will be sent)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 STEP 2: Start MongoDB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Windows PowerShell:
   mongod

या

Windows Command Prompt:
   net start MongoDB

Linux/Mac:
   sudo systemctl start mongod

MongoDB को verify करने के लिए:
   mongosh

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 STEP 3: Start the Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Development Mode (with auto-restart):
   npm run dev

Production Mode:
   npm start

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 STEP 4: Test the API
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Option 1: Use Swagger UI (Recommended)
   Open in browser: http://localhost:5000/api-docs
   - Interactive API documentation
   - Try all endpoints directly
   - See request/response examples

Option 2: Use Test Script
   node test-api.js
   - Automated test of all endpoints
   - Checks if everything is working

Option 3: Use Postman/Thunder Client
   Base URL: http://localhost:5000
   Import endpoints from: http://localhost:5000/api-docs.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email Testing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you submit a contact form:

1. ✅ Admin email sent to: campaignwalatech@gmail.com
   - Beautiful HTML template
   - All form details included
   - Professional formatting

2. ✅ Confirmation email sent to: user's email
   - Thank you message
   - Submission confirmation
   - Auto-reply

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Quick Test - Submit Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "email": "test@example.com",
  "name": "Test User",
  "phone": "+1234567890",
  "companyName": "Test Company",
  "companyEmail": "company@example.com",
  "projectTitle": "Test Project",
  "projectDescription": "This is a test submission for the contact form API"
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 Available Endpoints
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ GET  /                       - Welcome message
✅ GET  /health                 - Health check
✅ GET  /api-docs               - Swagger UI
✅ POST /api/contact            - Submit contact form
✅ GET  /api/contact            - Get all submissions
✅ GET  /api/contact/stats      - Get statistics
✅ GET  /api/contact/:id        - Get single submission
✅ PUT  /api/contact/:id        - Update submission
✅ DELETE /api/contact/:id      - Delete submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❓ Troubleshooting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Email not sending
Solution:
  1. Check if EMAIL_USER and EMAIL_PASSWORD are correct
  2. Make sure you're using App Password (not regular password)
  3. Enable 2-Step Verification in Gmail
  4. Check spam folder

Problem: MongoDB connection error
Solution:
  1. Make sure MongoDB is running
  2. Check MONGODB_URI in .env
  3. Test connection: mongosh

Problem: Port already in use
Solution:
  1. Change PORT in .env
  2. Or kill the process:
     Windows: netstat -ano | findstr :5000
     Linux/Mac: lsof -ti:5000 | xargs kill -9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Documentation & Resources
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 README.md           - Complete documentation
📚 Swagger UI          - http://localhost:5000/api-docs
📄 API Spec (JSON)     - http://localhost:5000/api-docs.json
🧪 Test Script         - node test-api.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Ready to Start!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

अब आप ready हो! बस .env file configure करो और server start करो! 🚀

Need help? Contact: campaignwalatech@gmail.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
