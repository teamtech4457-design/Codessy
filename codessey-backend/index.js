require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const { setupSwagger } = require('./src/config/sawgger');
const contactFormRouter = require('./src/router.js/contactform.router');
const queryRouter = require('./src/router.js/query.router');
const emailService = require('./src/utils/emailService');

// Initialize Express app
const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Middleware Configuration
 */

// CORS - Allow cross-origin requests
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

/**
 * Setup Swagger Documentation
 */
setupSwagger(app);

/**
 * API Routes
 */

// Health check endpoint
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Check if the API server is running
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Server is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 uptime:
 *                   type: number
 *                   description: Server uptime in seconds
 */
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: NODE_ENV
    });
});

// Welcome endpoint
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome endpoint
 *     description: Get welcome message and API information
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Welcome to Codessey Contact Form API
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 *                 documentation:
 *                   type: string
 *                   example: /api-docs
 */
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Codessey Contact Form API',
        version: '1.0.0',
        documentation: '/api-docs',
        endpoints: {
            health: '/health',
            contactForms: '/api/contact',
            queries: '/api/queries',
            swagger: '/api-docs',
            swaggerJson: '/api-docs.json'
        }
    });
});

// Contact form routes
app.use('/api/contact', contactFormRouter);

// Query routes
app.use('/api/queries', queryRouter);

/**
 * 404 Error Handler - Route not found
 */
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

/**
 * Global Error Handler
 */
app.use((err, req, res, next) => {
    console.error('❌ Error:', err);
    
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        error: NODE_ENV === 'development' ? err.stack : undefined,
        timestamp: new Date().toISOString()
    });
});

/**
 * Start Server
 */
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        
        // Verify email service
        await emailService.verifyConnection();
        
        // Start listening
        app.listen(PORT, () => {
            console.log('\n' + '='.repeat(60));
            console.log('🚀 Codessey Contact Form API Server');
            console.log('='.repeat(60));
            console.log(`📍 Environment: ${NODE_ENV}`);
            console.log(`🌐 Server: http://localhost:${PORT}`);
            console.log(`📚 Swagger UI: http://localhost:${PORT}/api-docs`);
            console.log(`📄 Swagger JSON: http://localhost:${PORT}/api-docs.json`);
            console.log(`💚 Health Check: http://localhost:${PORT}/health`);
            console.log(`📧 Receiver Email: ${process.env.RECEIVER_EMAIL}`);
            console.log('='.repeat(60) + '\n');
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Promise Rejection:', err);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('👋 SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

// Start the server
startServer();

module.exports = app;
