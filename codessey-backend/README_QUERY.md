# Query Management System - Complete Backend

A comprehensive backend system for managing user queries with email notifications, status tracking, and advanced filtering capabilities.

## 📋 Overview

This Query Management System provides a complete solution for handling user queries with the following features:

### ✅ Core Features
- ✉️ **Email Notifications** - Automatic notifications to admin and user
- 📊 **Status Tracking** - Track queries through their lifecycle (pending → in-progress → resolved → closed)
- 🎯 **Priority Management** - Organize queries by priority (low, medium, high, urgent)
- 🏷️ **Category System** - Categorize queries for better organization
- 👤 **Admin Assignment** - Assign queries to specific admin users
- 💬 **Response Management** - Store and send responses to users
- 📈 **Statistics & Analytics** - Comprehensive statistics and reporting
- 🔍 **Advanced Filtering** - Filter by status, priority, category, and search
- 📄 **Pagination** - Efficient data handling with pagination
- 🗑️ **Bulk Operations** - Delete multiple queries at once

### 📝 Required Fields
- **Name** - User's full name
- **Email** - Valid email address
- **Phone Number** - Contact phone number
- **Query** - The actual question/issue (10-2000 characters)

### 🎨 Optional Fields
- **Priority** - low, medium (default), high, urgent
- **Category** - Custom category (default: general)
- **Status** - pending (default), in-progress, resolved, closed

---

## 🗂️ Project Structure

```
codessey/
├── src/
│   ├── model.js/
│   │   └── query.model.js          # Query schema and model
│   ├── controller.js/
│   │   └── query.controller.js     # All query controllers (10 endpoints)
│   └── router.js/
│       └── query.router.js         # All query routes with Swagger docs
├── index.js                        # Main server file (updated with query routes)
├── test-query-api.js              # Complete testing guide
├── QUERY_API_DOCUMENTATION.md     # Full API documentation
└── README_QUERY.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Gmail account (for email notifications)

### Installation

1. **Navigate to project directory:**
```bash
cd codessey
```

2. **Install dependencies (if not already done):**
```bash
npm install
```

3. **Configure environment variables:**
Update your `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=campaignwalatech@gmail.com
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NODE_ENV=development
```

4. **Start the server:**
```bash
node index.js
```

Server will start at: `http://localhost:5000`

---

## 📡 API Endpoints

### Base URL: `/api/queries`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/queries` | Submit a new query |
| GET | `/api/queries` | Get all queries (with filters) |
| GET | `/api/queries/stats` | Get query statistics |
| GET | `/api/queries/pending` | Get all pending queries |
| GET | `/api/queries/:id` | Get query by ID |
| PUT | `/api/queries/:id` | Update query |
| PATCH | `/api/queries/:id/status` | Update query status |
| PATCH | `/api/queries/:id/assign` | Assign query to admin |
| DELETE | `/api/queries/:id` | Delete query |
| DELETE | `/api/queries/bulk` | Bulk delete queries |

---

## 📚 Quick Start Examples

### 1. Create a New Query

**Using cURL:**
```bash
curl -X POST http://localhost:5000/api/queries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "query": "I need help implementing authentication in my React application.",
    "priority": "high",
    "category": "technical-support"
  }'
```

**Using PowerShell:**
```powershell
$body = @{
    name = "John Doe"
    email = "john.doe@example.com"
    phone = "+1234567890"
    query = "I need help implementing authentication"
    priority = "high"
    category = "technical-support"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/queries" `
  -Method POST -Body $body -ContentType "application/json"
```

**Using JavaScript/Fetch:**
```javascript
const response = await fetch('http://localhost:5000/api/queries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    query: 'I need help implementing authentication',
    priority: 'high',
    category: 'technical-support'
  })
});
const data = await response.json();
console.log(data);
```

### 2. Get All Queries with Filters

```bash
# Get pending queries with high priority
curl "http://localhost:5000/api/queries?status=pending&priority=high&page=1&limit=10"

# Search for queries
curl "http://localhost:5000/api/queries?search=authentication"

# Sort by creation date
curl "http://localhost:5000/api/queries?sortBy=createdAt&order=desc"
```

### 3. Update Query Status to Resolved

```bash
curl -X PATCH http://localhost:5000/api/queries/QUERY_ID/status \
  -H "Content-Type: application/json" \
  -d '{
    "status": "resolved",
    "response": "Your issue has been resolved successfully."
  }'
```

### 4. Get Statistics

```bash
curl "http://localhost:5000/api/queries/stats"
```

---

## 📊 Response Examples

### Successful Query Creation
```json
{
  "success": true,
  "message": "Query submitted successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "query": "I need help implementing authentication...",
    "priority": "high",
    "category": "technical-support",
    "status": "pending",
    "assignedTo": null,
    "response": null,
    "createdAt": "2024-11-07T10:30:00.000Z",
    "updatedAt": "2024-11-07T10:30:00.000Z",
    "resolvedAt": null
  }
}
```

### Get All Queries Response
```json
{
  "success": true,
  "message": "Queries fetched successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalQueries": 50,
    "queriesPerPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Statistics Response
```json
{
  "success": true,
  "message": "Statistics fetched successfully",
  "data": {
    "overview": {
      "total": 150,
      "pending": 45,
      "inProgress": 30,
      "resolved": 70,
      "closed": 5
    },
    "byPriority": [...],
    "byCategory": [...],
    "recentQueries": 25,
    "averageResolutionTimeHours": 24
  }
}
```

---

## 🧪 Testing

### Method 1: Using Test Script
```bash
node test-query-api.js
```

### Method 2: Using Swagger UI
1. Start the server
2. Open browser: `http://localhost:5000/api-docs`
3. Navigate to "Queries" section
4. Test endpoints interactively

### Method 3: Using Postman
1. Import the collection from `test-query-api.js`
2. Run individual requests
3. View responses

### Method 4: Manual Testing
Use the cURL or PowerShell commands provided in the documentation

---

## 📧 Email Notifications

### When Query is Created:
1. **Admin receives:** Notification with query details
2. **User receives:** Confirmation email with query ID

### When Query is Resolved:
1. **User receives:** Resolution email with the response

### Email Templates Include:
- Query ID for reference
- User information
- Query details
- Status updates
- Priority indicators
- Response content (when resolved)

---

## 🔒 Validation Rules

### Name
- Required
- 2-100 characters
- Trimmed

### Email
- Required
- Valid email format
- Lowercase
- Trimmed

### Phone
- Required
- Valid phone format
- International format supported

### Query
- Required
- 10-2000 characters
- Trimmed

### Status
- Enum: ['pending', 'in-progress', 'resolved', 'closed']
- Default: 'pending'

### Priority
- Enum: ['low', 'medium', 'high', 'urgent']
- Default: 'medium'

---

## 📈 Available Filters and Sorting

### Filters:
- `status` - Filter by query status
- `priority` - Filter by priority level
- `category` - Filter by category
- `search` - Search in name, email, phone, or query text

### Sorting:
- `sortBy` - Field to sort by (default: createdAt)
- `order` - Sort order: asc or desc (default: desc)

### Pagination:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

---

## 🎯 Use Cases

### For Users:
1. Submit queries easily
2. Receive instant confirmation
3. Get notified when resolved
4. Track query status

### For Admins:
1. View all queries in dashboard
2. Filter by status/priority/category
3. Assign queries to team members
4. Track resolution times
5. View comprehensive statistics
6. Respond to queries efficiently

---

## 🛠️ Database Schema

```javascript
Query Schema:
- _id: ObjectId (auto-generated)
- name: String (required)
- email: String (required, validated)
- phone: String (required, validated)
- query: String (required, 10-2000 chars)
- status: String (enum, default: 'pending')
- priority: String (enum, default: 'medium')
- category: String (default: 'general')
- assignedTo: String (nullable)
- response: String (nullable, max 5000 chars)
- createdAt: Date (auto)
- updatedAt: Date (auto)
- resolvedAt: Date (nullable)
```

### Indexes:
- email (ascending)
- status (ascending)
- priority (ascending)
- createdAt (descending)
- category (ascending)

---

## 🌐 Integration Guide

### Frontend Integration Example (React):

```javascript
// Create query
const submitQuery = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/queries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      alert('Query submitted successfully!');
      return data.data;
    } else {
      alert('Failed to submit query');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Get all queries
const fetchQueries = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await fetch(`http://localhost:5000/api/queries?${params}`);
  return await response.json();
};

// Get statistics
const fetchStats = async () => {
  const response = await fetch('http://localhost:5000/api/queries/stats');
  return await response.json();
};
```

---

## 🐛 Troubleshooting

### Common Issues:

**1. Email not sending:**
- Check EMAIL_USER and EMAIL_PASS in .env
- Verify Gmail "App Password" is being used
- Check EMAIL_HOST and EMAIL_PORT

**2. Database connection failed:**
- Verify MONGODB_URI in .env
- Check MongoDB server is running
- Verify network connectivity

**3. Validation errors:**
- Ensure all required fields are provided
- Check email and phone format
- Verify query length (10-2000 characters)

**4. Query not found:**
- Verify query ID format (MongoDB ObjectId)
- Check if query exists in database

---

## 📖 Documentation

- **Complete API Documentation:** `QUERY_API_DOCUMENTATION.md`
- **Testing Guide:** `test-query-api.js`
- **Swagger UI:** `http://localhost:5000/api-docs`
- **Main README:** `README.md`

---

## 🔗 Related Files

- **Model:** `src/model.js/query.model.js`
- **Controller:** `src/controller.js/query.controller.js`
- **Router:** `src/router.js/query.router.js`
- **Main Server:** `index.js`
- **Test File:** `test-query-api.js`

---

## 📝 Changelog

### Version 1.0.0 (November 7, 2024)
- ✅ Initial release
- ✅ Complete CRUD operations
- ✅ Email notification system
- ✅ Advanced filtering and search
- ✅ Statistics and analytics
- ✅ Swagger documentation
- ✅ Comprehensive testing suite

---

## 💡 Tips

1. **Use appropriate priorities** for better query management
2. **Set up email properly** for notifications to work
3. **Use filters** to find queries quickly
4. **Monitor statistics** for insights
5. **Test thoroughly** before production deployment
6. **Keep query descriptions detailed** for better resolution

---

## 🤝 Support

For help or questions:
- Email: campaignwalatech@gmail.com
- Documentation: http://localhost:5000/api-docs

---

## ✅ Features Checklist

- [x] Create query with validation
- [x] Get all queries with pagination
- [x] Get query by ID
- [x] Update query
- [x] Delete query
- [x] Bulk delete queries
- [x] Status tracking (pending, in-progress, resolved, closed)
- [x] Priority management (low, medium, high, urgent)
- [x] Category system
- [x] Admin assignment
- [x] Response management
- [x] Email notifications (admin + user)
- [x] Advanced filtering
- [x] Search functionality
- [x] Sorting options
- [x] Statistics and analytics
- [x] Swagger documentation
- [x] Error handling
- [x] Validation
- [x] MongoDB indexes
- [x] Testing suite

---

**🎉 All Query APIs are complete and ready to use!**

Last Updated: November 7, 2024
Version: 1.0.0
