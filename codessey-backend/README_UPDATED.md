# 🎯 Codessey Contact Form & Query Management API

Complete RESTful API for managing contact form submissions and user queries with email notifications, Swagger documentation, and comprehensive testing.

## ✨ Features

- 📝 **Contact Form Management** - Complete CRUD operations
- ❓ **Query Management** - Handle user queries with priority levels
- 📧 **Email Notifications** - Automatic notifications for submissions
- ✉️ **Confirmation Emails** - Auto-reply to users
- 📚 **Swagger Documentation** - Interactive API documentation at `/api-docs`
- 🔍 **Search & Filtering** - Advanced query capabilities
- 📊 **Statistics Dashboard** - Track submissions and queries
- ✅ **Input Validation** - MongoDB schema validation
- 🔒 **Error Handling** - Comprehensive error responses
- 🧪 **Complete Testing Suite** - 100+ automated tests with coverage

## 🧪 Testing

This project includes a comprehensive testing suite with **100+ tests**!

### Quick Start
```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run in watch mode (for development)
npm run test:watch
```

### Test Types
- ✅ **Unit Tests** (50+) - Models & Controllers
- ✅ **Integration Tests** (30+) - API Endpoints
- ✅ **E2E Tests** (20+) - Complete Workflows
- ✅ **Manual Testing** - Postman Collection & Guides

### Test Commands
| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:unit` | Run only unit tests |
| `npm run test:integration` | Run only integration tests |
| `npm run test:e2e` | Run only E2E tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run with coverage report |

### Testing Documentation
- 📖 **[TESTING_INDEX.md](./TESTING_INDEX.md)** - Complete testing navigation
- ⚡ **[QUICK_START_TESTING.md](./QUICK_START_TESTING.md)** - Quick setup guide
- 📊 **[TESTING_COMPLETE.md](./TESTING_COMPLETE.md)** - Implementation overview
- 📚 **[tests/TESTING_README.md](./tests/TESTING_README.md)** - Comprehensive guide
- 🧪 **[tests/manual/MANUAL_TESTING_GUIDE.md](./tests/manual/MANUAL_TESTING_GUIDE.md)** - Manual testing

**Coverage Target:** 70%+ (Unit, Integration, and E2E tests)

## 📋 API Endpoints

### Contact Form Endpoints
- `POST /api/contact` - Create contact form
- `GET /api/contact` - Get all contact forms (with pagination & search)
- `GET /api/contact/:id` - Get contact form by ID
- `PUT /api/contact/:id` - Update contact form
- `DELETE /api/contact/:id` - Delete contact form

### Query Endpoints
- `POST /api/queries` - Create query
- `GET /api/queries` - Get all queries (with filters)
- `GET /api/queries/:id` - Get query by ID
- `PUT /api/queries/:id` - Update query (status, response)
- `DELETE /api/queries/:id` - Delete query
- `GET /api/queries/statistics` - Get query statistics

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
ADMIN_EMAIL=admin@example.com

# CORS
CORS_ORIGIN=*
```

### 3. Start MongoDB

```bash
# Make sure MongoDB is running
mongod
```

### 4. Run the Application

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

### 5. Run Tests (Optional)

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Contact Form API Usage

### Create Contact Form

```bash
POST /api/contact
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "phone": "+1234567890",
  "companyName": "Tech Solutions Inc",
  "companyEmail": "info@techsolutions.com",
  "projectTitle": "Mobile App Development",
  "projectDescription": "We need a mobile application..."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully!",
  "data": {
    "_id": "...",
    "email": "john.doe@example.com",
    "name": "John Doe",
    ...
  }
}
```

### Get All Contact Forms

```bash
GET /api/contact?page=1&limit=10&search=John&sort=-createdAt
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact forms retrieved successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

## ❓ Query API Usage

### Create Query

```bash
POST /api/queries
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+9876543210",
  "query": "I have a question about your services...",
  "priority": "high",
  "category": "general"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Query submitted successfully!",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "status": "pending",
    "priority": "high",
    ...
  }
}
```

### Update Query Status

```bash
PUT /api/queries/:id
Content-Type: application/json

{
  "status": "resolved",
  "response": "Thank you for your query. Here is our response..."
}
```

### Get Queries with Filters

```bash
GET /api/queries?status=pending&priority=urgent&category=technical
```

### Get Query Statistics

```bash
GET /api/queries/statistics
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 100,
    "byStatus": {
      "pending": 30,
      "in-progress": 20,
      "resolved": 40,
      "closed": 10
    },
    "byPriority": {
      "low": 20,
      "medium": 40,
      "high": 30,
      "urgent": 10
    }
  }
}
```

## 📚 API Documentation

### Swagger UI
Access interactive API documentation:
```
http://localhost:5000/api-docs
```

### Postman Collection
Import the Postman collection for manual testing:
- See [tests/manual/POSTMAN_COLLECTION.md](./tests/manual/POSTMAN_COLLECTION.md)

## 🗂️ Project Structure

```
codessey/
├── src/
│   ├── config/
│   │   ├── db.js                    # MongoDB connection
│   │   └── sawgger.js               # Swagger configuration
│   ├── controller.js/
│   │   ├── contactform.controller.js
│   │   └── query.controller.js
│   ├── model.js/
│   │   ├── contactform.model.js
│   │   └── query.model.js
│   ├── router.js/
│   │   ├── contactform.router.js
│   │   └── query.router.js
│   └── utils/
│       └── emailService.js          # Email functionality
├── tests/                           # Testing suite (100+ tests)
│   ├── unit/                       # Unit tests
│   ├── integration/                # Integration tests
│   ├── e2e/                        # E2E tests
│   ├── manual/                     # Manual testing guides
│   └── helpers/                    # Test utilities
├── index.js                        # Application entry point
├── jest.config.js                  # Jest configuration
├── package.json                    # Dependencies & scripts
├── .env.example                    # Environment variables template
├── TESTING_INDEX.md                # Testing navigation
└── README.md                       # This file
```

## 🔧 Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Email
- **Nodemailer** - Email sending

### Documentation
- **Swagger UI** - API documentation
- **Swagger JSDoc** - API documentation generation

### Testing
- **Jest** - Test framework
- **Supertest** - HTTP testing
- **MongoDB Memory Server** - In-memory database for tests

### Development
- **Nodemon** - Auto-reload during development
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing

## 📊 Query Priority Levels

- `low` - General inquiries, non-urgent
- `medium` - Standard business queries (default)
- `high` - Important inquiries requiring prompt attention
- `urgent` - Critical issues needing immediate response

## 📁 Query Categories

- `general` - General inquiries (default)
- `technical` - Technical support questions
- `billing` - Billing and payment queries
- `support` - Customer support requests

## 📧 Email Configuration

The application sends emails for:
1. **Admin Notifications** - When new submissions are received
2. **User Confirmations** - Acknowledgment emails to users
3. **Query Responses** - When queries are answered

### Gmail Setup
1. Enable 2-factor authentication in your Google account
2. Generate an App Password
3. Use the App Password in `.env` file

## 🛡️ Error Handling

The API provides detailed error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [...]  // Detailed validation errors (if applicable)
}
```

## 🔍 Query Parameters

### Pagination
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

### Sorting
- `sort` - Sort field (prefix with `-` for descending)
- Example: `sort=-createdAt` (newest first)

### Filtering (Queries)
- `status` - Filter by status (pending, in-progress, resolved, closed)
- `priority` - Filter by priority (low, medium, high, urgent)
- `category` - Filter by category

### Search
- `search` - Search across name, email, title, etc.

## 📈 Statistics

Get query statistics:
```
GET /api/queries/statistics
```

Returns:
- Total queries
- Breakdown by status
- Breakdown by priority
- Breakdown by category

## 🚦 Status Codes

- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `409` - Conflict (duplicate entries)
- `500` - Internal Server Error

## 🧪 Testing Features

- ✅ Automated unit tests for models
- ✅ Automated unit tests for controllers
- ✅ Integration tests for all API endpoints
- ✅ End-to-end workflow tests
- ✅ Test coverage reporting (70%+ target)
- ✅ MongoDB Memory Server (no real DB needed for tests)
- ✅ Mocked email service
- ✅ Test data factories
- ✅ Manual testing guides
- ✅ Postman collection

## 📝 Scripts

```json
{
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest",
  "test:unit": "jest tests/unit",
  "test:integration": "jest tests/integration",
  "test:e2e": "jest tests/e2e",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:verbose": "jest --verbose"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Run `npm test` to ensure all tests pass
5. Submit a pull request

## 📄 License

ISC License

## 👤 Author

Codessey Development Team

## 📞 Support

For issues or questions:
- Check the [Testing Documentation](./TESTING_INDEX.md)
- Review the [Manual Testing Guide](./tests/manual/MANUAL_TESTING_GUIDE.md)
- Use Swagger UI at `/api-docs`

---

**Happy Coding! 🚀**

**For Testing:** See [TESTING_INDEX.md](./TESTING_INDEX.md) for complete testing documentation.
