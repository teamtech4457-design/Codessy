# 🎯 Codessey Contact Form API

Complete RESTful API for managing contact form submissions with email notifications and Swagger documentation.

## ✨ Features

- 📝 **Contact Form Management** - Complete CRUD operations
- 📧 **Email Notifications** - Automatic email to `campaignwalatech@gmail.com`
- ✉️ **Confirmation Emails** - Auto-reply to users
- 📚 **Swagger Documentation** - Interactive API documentation
- 🔍 **Search & Pagination** - Advanced query capabilities
- 📊 **Statistics Dashboard** - Track submissions
- ✅ **Input Validation** - MongoDB schema validation
- 🔒 **Error Handling** - Comprehensive error responses

## 📋 Required Fields

- **Email** - Contact person's email
- **Name** - Full name
- **Phone Number** - Contact number
- **Company Name** - Organization name
- **Company Email** - Official company email
- **Project Title** - Brief project title
- **Project Description** - Detailed project description

## 🚀 Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/codessey

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=Codessey <your-email@gmail.com>

# Receiver Email
RECEIVER_EMAIL=campaignwalatech@gmail.com
```

### 3. Setup Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate App Password: [App Passwords](https://myaccount.google.com/apppasswords)
4. Use the generated password in `EMAIL_PASSWORD`

### 4. Install & Run MongoDB

Make sure MongoDB is installed and running:

```bash
# Windows
mongod

# Linux/Mac
sudo systemctl start mongod
```

### 5. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📚 API Endpoints

### Base URL: `http://localhost:5000`

### System Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/health` | Health check |
| GET | `/api-docs` | Swagger UI |
| GET | `/api-docs.json` | Swagger JSON |

### Contact Form Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit new contact form |
| GET | `/api/contact` | Get all submissions (paginated) |
| GET | `/api/contact/stats` | Get statistics |
| GET | `/api/contact/:id` | Get single submission |
| PUT | `/api/contact/:id` | Update submission |
| DELETE | `/api/contact/:id` | Delete submission |

## 📝 API Examples

### Submit Contact Form

```bash
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "phone": "+1234567890",
  "companyName": "Tech Solutions Inc.",
  "companyEmail": "info@techsolutions.com",
  "projectTitle": "E-commerce Website Development",
  "projectDescription": "We need a modern e-commerce platform with payment gateway integration..."
}
```

### Get All Submissions (with pagination)

```bash
GET http://localhost:5000/api/contact?page=1&limit=10&sort=-createdAt
```

### Search Submissions

```bash
GET http://localhost:5000/api/contact?search=John
```

### Get Statistics

```bash
GET http://localhost:5000/api/contact/stats
```

## 📧 Email Notification

When a contact form is submitted:

1. **Admin Notification** - Beautiful HTML email sent to `campaignwalatech@gmail.com` with all form details
2. **User Confirmation** - Auto-reply confirmation email sent to the user's email address

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Swagger** - API documentation
- **JWT** (optional) - Authentication

## 📦 Project Structure

```
codessey/
├── index.js                          # Main server file
├── package.json                      # Dependencies
├── .env                             # Environment variables
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore file
└── src/
    ├── config/
    │   ├── db.js                    # MongoDB connection
    │   └── sawgger.js               # Swagger configuration
    ├── model.js/
    │   └── contactform.model.js     # Mongoose schema
    ├── controller.js/
    │   └── contactform.controller.js # Business logic
    ├── router.js/
    │   └── contactform.router.js    # API routes
    └── utils/
        └── emailService.js          # Email service
```

## 🔧 Configuration

### MongoDB Connection String

```javascript
mongodb://localhost:27017/codessey
// OR
mongodb+srv://username:password@cluster.mongodb.net/codessey
```

### Email Service (Gmail)

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # Use App Password, not regular password
```

### Other SMTP Services

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

**Custom SMTP:**
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
```

## 🐛 Troubleshooting

### Email Not Sending

1. **Check Gmail Settings:**
   - Enable 2-Step Verification
   - Generate App Password
   - Use App Password in `.env`

2. **Check Email Credentials:**
   ```bash
   # Test email configuration
   node -e "require('./src/utils/emailService').verifyConnection()"
   ```

3. **Allow Less Secure Apps** (Not recommended):
   - Go to: https://myaccount.google.com/lesssecureapps
   - Enable access (if 2FA is not enabled)

### MongoDB Connection Error

```bash
# Check if MongoDB is running
mongosh

# Or start MongoDB service
# Windows
net start MongoDB

# Linux
sudo systemctl start mongod

# Mac
brew services start mongodb-community
```

### Port Already in Use

```bash
# Change PORT in .env file
PORT=3000

# Or kill the process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    ...
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

## 🔐 Security Features

- Input validation using Mongoose validators
- Email format validation
- Phone number format validation
- XSS protection (built-in with Express)
- Rate limiting (can be added)
- CORS configuration

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codessey
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASSWORD=your-production-app-password
RECEIVER_EMAIL=campaignwalatech@gmail.com
CORS_ORIGIN=https://yourdomain.com
```

### Deploy to Heroku, Vercel, or Railway

The app is ready to deploy to any Node.js hosting platform.

## 📄 License

ISC

## 👥 Support

For issues or questions, contact: **campaignwalatech@gmail.com**

## 🎉 Getting Started Quick Guide

```bash
# 1. Clone or navigate to project
cd codessey

# 2. Install dependencies
npm install

# 3. Setup .env file
cp .env.example .env
# Edit .env with your credentials

# 4. Start MongoDB
mongod

# 5. Run the server
npm run dev

# 6. Open Swagger UI
http://localhost:5000/api-docs

# 7. Test the API
# Submit a test contact form through Swagger UI
```

---

**Made with ❤️ by Codessey Team**
