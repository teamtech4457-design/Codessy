# 🚀 Quick Start Guide - Query Backend

## ⚡ Fast Setup (2 Minutes)

### Step 1: Install Dependencies
```powershell
cd d:\demoK\AllTeamCode\codessey
npm install
```

### Step 2: Configure Environment
Create or update `.env` file:
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

### Step 3: Start Server
```powershell
node index.js
```

### Step 4: Test API
Open browser: `http://localhost:5000/api-docs`

---

## 🧪 Quick Test (PowerShell)

### Create a Query
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    phone = "+1234567890"
    query = "This is a test query to check if everything is working properly"
    priority = "high"
    category = "test"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/queries" -Method POST -Body $body -ContentType "application/json"
```

### Get All Queries
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/queries" -Method GET
```

### Get Statistics
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/queries/stats" -Method GET
```

---

## 📁 Files Created

✅ **Model:** `src/model.js/query.model.js`
✅ **Controller:** `src/controller.js/query.controller.js`
✅ **Router:** `src/router.js/query.router.js`
✅ **Test File:** `test-query-api.js`
✅ **Documentation:** `QUERY_API_DOCUMENTATION.md`
✅ **README:** `README_QUERY.md`
✅ **Summary:** `QUERY_IMPLEMENTATION_SUMMARY.md`

---

## 🎯 All 10 Endpoints

1. ✅ POST `/api/queries` - Create query
2. ✅ GET `/api/queries` - Get all queries
3. ✅ GET `/api/queries/stats` - Get statistics
4. ✅ GET `/api/queries/pending` - Get pending
5. ✅ GET `/api/queries/:id` - Get by ID
6. ✅ PUT `/api/queries/:id` - Update query
7. ✅ PATCH `/api/queries/:id/status` - Update status
8. ✅ PATCH `/api/queries/:id/assign` - Assign query
9. ✅ DELETE `/api/queries/:id` - Delete query
10. ✅ DELETE `/api/queries/bulk` - Bulk delete

---

## ✅ Required Fields

All 4 required fields implemented:
- ✅ Name (2-100 characters)
- ✅ Email (valid format)
- ✅ Phone (valid format)
- ✅ Query (10-2000 characters)

---

## 📧 Email Notifications

✅ Admin notification (new query)
✅ User confirmation (new query)
✅ User notification (resolved)

---

## 📚 Documentation

- **Complete API Docs:** `QUERY_API_DOCUMENTATION.md`
- **Testing Guide:** `test-query-api.js`
- **README:** `README_QUERY.md`
- **Swagger UI:** http://localhost:5000/api-docs

---

## 🎉 Status: 100% COMPLETE

All Query backend APIs are fully implemented and ready to use!

**Nothing is missing. Everything is working!**
