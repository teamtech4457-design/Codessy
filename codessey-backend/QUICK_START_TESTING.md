# Quick Start - Testing Guide

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run All Tests
```bash
npm test
```

### 3. View Coverage Report
```bash
npm run test:coverage
```

Then open: `coverage/lcov-report/index.html`

## 📋 Available Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:unit` | Run only unit tests |
| `npm run test:integration` | Run only integration tests |
| `npm run test:e2e` | Run only E2E tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:verbose` | Run tests with detailed output |
| `npm run test:all` | Run all tests with coverage & verbose |

## 🎯 Quick Test Examples

### Run Specific Test File
```bash
npm test -- tests/unit/contactform.model.test.js
```

### Run Tests Matching Pattern
```bash
npm test -- --testNamePattern="should create"
```

### Run Tests for Specific Suite
```bash
npm test -- --testPathPattern=unit
```

## 📊 Test Structure

```
tests/
├── unit/               # Component-level tests
├── integration/        # API endpoint tests
├── e2e/               # Complete workflow tests
├── manual/            # Manual testing guides
└── helpers/           # Test utilities
```

## ✅ Quick Health Check

Run this to verify everything is working:

```bash
# 1. Check test files are discovered
npm test -- --listTests

# 2. Run a single test file
npm test -- tests/unit/contactform.model.test.js

# 3. Run all tests
npm test
```

## 📖 Documentation

- **Complete Guide**: `tests/TESTING_README.md`
- **Manual Testing**: `tests/manual/MANUAL_TESTING_GUIDE.md`
- **Postman Collection**: `tests/manual/POSTMAN_COLLECTION.md`
- **Implementation Summary**: `TESTING_IMPLEMENTATION_SUMMARY.md`

## 🔥 Most Common Commands

```bash
# Development workflow
npm run test:watch          # Watch mode for TDD

# Before committing
npm run test:coverage      # Check coverage

# CI/CD
npm run test:all           # Full test suite with reports
```

## 💡 Tips

1. **Watch Mode**: Use `npm run test:watch` during development
2. **Coverage**: Aim for 70%+ coverage (configured threshold)
3. **Fast Tests**: Unit tests run fastest for quick feedback
4. **Manual Tests**: Use Postman collection for API testing
5. **Documentation**: Check `tests/TESTING_README.md` for details

## 🐛 Troubleshooting

### Tests Won't Run
```bash
# Clear Jest cache
npm test -- --clearCache

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Coverage Not Generated
```bash
# Run with explicit coverage flag
npm test -- --coverage
```

### Port Already in Use
- Tests use MongoDB Memory Server (no real DB needed)
- No port conflicts should occur

## 📈 Expected Results

- **Total Tests**: 100+
- **Execution Time**: 30-45 seconds
- **Coverage**: 70%+
- **Pass Rate**: 100%

---

**Ready to test! Run `npm test` to start. 🧪**
