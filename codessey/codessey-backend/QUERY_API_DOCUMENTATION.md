# Query API Documentation

Complete documentation for the Query Management System backend APIs.

## Table of Contents
- [Overview](#overview)
- [Base URL](#base-url)
- [Query Model Schema](#query-model-schema)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Testing Guide](#testing-guide)

---

## Overview

The Query Management System provides a complete backend solution for handling user queries with the following features:

✅ **Core Features:**
- Submit new queries with automatic email notifications
- Track query status (pending, in-progress, resolved, closed)
- Priority management (low, medium, high, urgent)
- Category-based organization
- Query assignment to admin users
- Response management
- Comprehensive statistics and reporting
- Advanced filtering, sorting, and search
- Bulk operations

✅ **Required Fields:**
- Name
- Email
- Phone Number
- Query

✅ **Optional Fields:**
- Priority (default: medium)
- Category (default: general)
- Status (default: pending)

---

## Base URL

```
http://localhost:5000/api/queries
```

---

## Query Model Schema

```javascript
{
  "_id": "ObjectId",
  "name": "String (required, 2-100 characters)",
  "email": "String (required, valid email format)",
  "phone": "String (required, valid phone format)",
  "query": "String (required, 10-2000 characters)",
  "status": "String (enum: ['pending', 'in-progress', 'resolved', 'closed'], default: 'pending')",
  "priority": "String (enum: ['low', 'medium', 'high', 'urgent'], default: 'medium')",
  "category": "String (default: 'general')",
  "assignedTo": "String (nullable)",
  "response": "String (nullable, max 5000 characters)",
  "createdAt": "Date (auto-generated)",
  "updatedAt": "Date (auto-updated)",
  "resolvedAt": "Date (nullable)"
}
```

---

## API Endpoints

### 1. Create New Query

**Endpoint:** `POST /api/queries`

**Description:** Submit a new query and send email notifications to both admin and user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "query": "I need help implementing authentication in my React application. Can you provide guidance on using JWT tokens?",
  "priority": "high",
  "category": "technical-support"
}
```

**Response (201 Created):**
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

**cURL Example:**
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

---

### 2. Get All Queries

**Endpoint:** `GET /api/queries`

**Description:** Retrieve all queries with pagination, filtering, sorting, and search capabilities.

**Query Parameters:**
- `page` (integer, default: 1) - Page number
- `limit` (integer, default: 10) - Items per page
- `status` (string) - Filter by status (pending, in-progress, resolved, closed)
- `priority` (string) - Filter by priority (low, medium, high, urgent)
- `category` (string) - Filter by category
- `sortBy` (string, default: createdAt) - Field to sort by
- `order` (string, default: desc) - Sort order (asc, desc)
- `search` (string) - Search in name, email, phone, or query text

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Queries fetched successfully",
  "data": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1a",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "query": "I need help...",
      "status": "pending",
      "priority": "high",
      "category": "technical-support",
      "assignedTo": null,
      "response": null,
      "createdAt": "2024-11-07T10:30:00.000Z",
      "updatedAt": "2024-11-07T10:30:00.000Z",
      "resolvedAt": null
    }
  ],
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

**cURL Examples:**

Basic request:
```bash
curl -X GET "http://localhost:5000/api/queries"
```

With pagination:
```bash
curl -X GET "http://localhost:5000/api/queries?page=1&limit=10"
```

With filters:
```bash
curl -X GET "http://localhost:5000/api/queries?status=pending&priority=high"
```

With search:
```bash
curl -X GET "http://localhost:5000/api/queries?search=authentication"
```

---

### 3. Get Query Statistics

**Endpoint:** `GET /api/queries/stats`

**Description:** Get comprehensive statistics about queries.

**Response (200 OK):**
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
      "closed": 5,
      "breakdown": [
        { "_id": "pending", "count": 45 },
        { "_id": "in-progress", "count": 30 },
        { "_id": "resolved", "count": 70 },
        { "_id": "closed", "count": 5 }
      ]
    },
    "byPriority": [
      { "_id": "low", "count": 20 },
      { "_id": "medium", "count": 60 },
      { "_id": "high", "count": 50 },
      { "_id": "urgent", "count": 20 }
    ],
    "byCategory": [
      { "_id": "technical-support", "count": 60 },
      { "_id": "sales-inquiry", "count": 40 },
      { "_id": "bug-report", "count": 30 },
      { "_id": "general", "count": 20 }
    ],
    "recentQueries": 25,
    "averageResolutionTimeHours": 24
  }
}
```

**cURL Example:**
```bash
curl -X GET "http://localhost:5000/api/queries/stats"
```

---

### 4. Get Pending Queries

**Endpoint:** `GET /api/queries/pending`

**Description:** Retrieve all queries with pending status, sorted by priority and creation date.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Pending queries fetched successfully",
  "data": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1a",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "query": "Urgent issue...",
      "status": "pending",
      "priority": "urgent",
      "category": "bug-report",
      "createdAt": "2024-11-07T10:30:00.000Z"
    }
  ],
  "count": 45
}
```

**cURL Example:**
```bash
curl -X GET "http://localhost:5000/api/queries/pending"
```

---

### 5. Get Query by ID

**Endpoint:** `GET /api/queries/:id`

**Description:** Retrieve a specific query by its ID.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Query fetched successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "query": "I need help...",
    "status": "in-progress",
    "priority": "high",
    "category": "technical-support",
    "assignedTo": "admin@codessey.com",
    "response": null,
    "createdAt": "2024-11-07T10:30:00.000Z",
    "updatedAt": "2024-11-07T11:00:00.000Z",
    "resolvedAt": null
  }
}
```

**cURL Example:**
```bash
curl -X GET "http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a"
```

---

### 6. Update Query

**Endpoint:** `PUT /api/queries/:id`

**Description:** Update a query with new information.

**Request Body:**
```json
{
  "status": "in-progress",
  "priority": "urgent",
  "category": "technical-support",
  "assignedTo": "admin@codessey.com",
  "response": "We are working on your issue and will get back to you soon."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Query updated successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "query": "I need help...",
    "status": "in-progress",
    "priority": "urgent",
    "category": "technical-support",
    "assignedTo": "admin@codessey.com",
    "response": "We are working on your issue...",
    "createdAt": "2024-11-07T10:30:00.000Z",
    "updatedAt": "2024-11-07T12:00:00.000Z",
    "resolvedAt": null
  }
}
```

**cURL Example:**
```bash
curl -X PUT http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a \
  -H "Content-Type: application/json" \
  -d '{
    "status": "in-progress",
    "priority": "urgent",
    "assignedTo": "admin@codessey.com"
  }'
```

---

### 7. Update Query Status

**Endpoint:** `PATCH /api/queries/:id/status`

**Description:** Update only the status of a query. When marking as resolved, a response email is sent to the user.

**Request Body:**
```json
{
  "status": "resolved",
  "response": "We have implemented JWT authentication for your React application. Please check the documentation we sent via email."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Query status updated successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "status": "resolved",
    "response": "We have implemented JWT authentication...",
    "resolvedAt": "2024-11-07T15:00:00.000Z"
  }
}
```

**cURL Examples:**

Mark as in-progress:
```bash
curl -X PATCH http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a/status \
  -H "Content-Type: application/json" \
  -d '{"status": "in-progress"}'
```

Mark as resolved:
```bash
curl -X PATCH http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a/status \
  -H "Content-Type: application/json" \
  -d '{
    "status": "resolved",
    "response": "Your issue has been resolved successfully."
  }'
```

---

### 8. Assign Query to Admin

**Endpoint:** `PATCH /api/queries/:id/assign`

**Description:** Assign a query to a specific admin user. Automatically updates status to "in-progress".

**Request Body:**
```json
{
  "assignedTo": "admin@codessey.com"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Query assigned successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "assignedTo": "admin@codessey.com",
    "status": "in-progress",
    "updatedAt": "2024-11-07T11:00:00.000Z"
  }
}
```

**cURL Example:**
```bash
curl -X PATCH http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a/assign \
  -H "Content-Type: application/json" \
  -d '{"assignedTo": "admin@codessey.com"}'
```

---

### 9. Delete Query

**Endpoint:** `DELETE /api/queries/:id`

**Description:** Delete a specific query by ID.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Query deleted successfully",
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

**cURL Example:**
```bash
curl -X DELETE "http://localhost:5000/api/queries/60d5ec49f1b2c72b8c8e4f1a"
```

---

### 10. Bulk Delete Queries

**Endpoint:** `DELETE /api/queries/bulk`

**Description:** Delete multiple queries at once.

**Request Body:**
```json
{
  "ids": [
    "60d5ec49f1b2c72b8c8e4f1a",
    "60d5ec49f1b2c72b8c8e4f1b",
    "60d5ec49f1b2c72b8c8e4f1c"
  ]
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Queries deleted successfully",
  "deletedCount": 3
}
```

**cURL Example:**
```bash
curl -X DELETE http://localhost:5000/api/queries/bulk \
  -H "Content-Type: application/json" \
  -d '{
    "ids": ["60d5ec49f1b2c72b8c8e4f1a", "60d5ec49f1b2c72b8c8e4f1b"]
  }'
```

---

## Error Handling

### Common Error Responses

**400 Bad Request - Missing Required Fields:**
```json
{
  "success": false,
  "message": "All required fields must be provided",
  "missingFields": {
    "name": false,
    "email": false,
    "phone": true,
    "query": true
  }
}
```

**400 Bad Request - Validation Error:**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    "Please provide a valid email address",
    "Query must be at least 10 characters long"
  ]
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "Query not found"
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "message": "Failed to submit query",
  "error": "Database connection error"
}
```

---

## Testing Guide

### Prerequisites
1. Server must be running: `node index.js`
2. MongoDB must be connected
3. Environment variables must be configured

### Testing Methods

#### 1. Using cURL (Command Line)
All cURL examples are provided above for each endpoint.

#### 2. Using PowerShell

**Create Query:**
```powershell
$body = @{
    name = "John Doe"
    email = "john.doe@example.com"
    phone = "+1234567890"
    query = "I need help with authentication"
    priority = "high"
    category = "technical-support"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/queries" -Method POST -Body $body -ContentType "application/json"
```

**Get All Queries:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/queries?page=1&limit=10" -Method GET
```

#### 3. Using Postman
1. Import the Postman collection from `test-query-api.js`
2. Run individual requests or the entire collection
3. View responses and test different scenarios

#### 4. Using Swagger UI
1. Navigate to `http://localhost:5000/api-docs`
2. Expand the "Queries" section
3. Try out each endpoint interactively
4. View request/response schemas

#### 5. Using Test Script
Run the included test script:
```bash
node test-query-api.js
```

---

## Email Notifications

### User Confirmation Email (On Query Creation)
- **To:** User's email
- **Subject:** "Query Received - We'll Get Back to You Soon"
- **Content:** Confirmation with query ID and details

### Admin Notification Email (On Query Creation)
- **To:** Admin email (from .env)
- **Subject:** "New Query Received - [Priority] Priority"
- **Content:** Complete query details with priority highlighting

### Resolution Email (When Status Changed to Resolved)
- **To:** User's email
- **Subject:** "Your Query Has Been Resolved"
- **Content:** Original query and admin response

---

## Best Practices

1. **Always validate input data** before submitting
2. **Use appropriate priority levels** for queries
3. **Provide detailed query descriptions** (10-2000 characters)
4. **Check response status codes** for error handling
5. **Use pagination** when fetching large datasets
6. **Filter and search** to find specific queries efficiently
7. **Monitor statistics** for query management insights

---

## Environment Variables Required

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=campaignwalatech@gmail.com
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## Support

For issues or questions:
- Email: campaignwalatech@gmail.com
- Documentation: http://localhost:5000/api-docs

---

**Last Updated:** November 7, 2024
**Version:** 1.0.0
**Author:** Codessey Development Team
