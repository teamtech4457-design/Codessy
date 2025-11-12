const express = require('express');
const queryController = require('../controller.js/query.controller');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Query:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - query
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *         name:
 *           type: string
 *           description: Name of the person submitting the query
 *           example: John Doe
 *         email:
 *           type: string
 *           format: email
 *           description: Email address
 *           example: john.doe@example.com
 *         phone:
 *           type: string
 *           description: Phone number
 *           example: +1234567890
 *         query:
 *           type: string
 *           description: The actual query/question
 *           example: I need help with implementing authentication in my app
 *         status:
 *           type: string
 *           enum: [pending, in-progress, resolved, closed]
 *           default: pending
 *           description: Current status of the query
 *         priority:
 *           type: string
 *           enum: [low, medium, high, urgent]
 *           default: medium
 *           description: Priority level of the query
 *         category:
 *           type: string
 *           description: Category of the query
 *           default: general
 *           example: technical-support
 *         assignedTo:
 *           type: string
 *           description: Admin user assigned to handle this query
 *           example: admin@codessey.com
 *         response:
 *           type: string
 *           description: Response/reply to the query
 *           example: We can help you implement JWT authentication...
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when query was submitted
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when query was last updated
 *         resolvedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when query was resolved
 */

/**
 * @swagger
 * tags:
 *   name: Queries
 *   description: Query management and tracking system
 */

/**
 * @swagger
 * /api/queries:
 *   post:
 *     summary: Submit a new query
 *     description: Create a new query submission and send email notifications
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - query
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               phone:
 *                 type: string
 *                 example: +1234567890
 *               query:
 *                 type: string
 *                 example: I need help with implementing authentication
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high, urgent]
 *                 default: medium
 *               category:
 *                 type: string
 *                 default: general
 *     responses:
 *       201:
 *         description: Query submitted successfully
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
 *                   example: Query submitted successfully
 *                 data:
 *                   $ref: '#/components/schemas/Query'
 *       400:
 *         description: Bad request - Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', queryController.createQuery);

/**
 * @swagger
 * /api/queries:
 *   get:
 *     summary: Get all queries with pagination and filtering
 *     description: Retrieve all queries with support for pagination, filtering, sorting, and search
 *     tags: [Queries]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of queries per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, in-progress, resolved, closed]
 *         description: Filter by status
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *           enum: [low, medium, high, urgent]
 *         description: Filter by priority
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: createdAt
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in name, email, phone, or query text
 *     responses:
 *       200:
 *         description: Queries fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Query'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     totalQueries:
 *                       type: integer
 *                     queriesPerPage:
 *                       type: integer
 *                     hasNextPage:
 *                       type: boolean
 *                     hasPrevPage:
 *                       type: boolean
 *       500:
 *         description: Server error
 */
router.get('/', queryController.getAllQueries);

/**
 * @swagger
 * /api/queries/stats:
 *   get:
 *     summary: Get query statistics
 *     description: Get comprehensive statistics about queries including status breakdown, priority distribution, and average resolution time
 *     tags: [Queries]
 *     responses:
 *       200:
 *         description: Statistics fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     overview:
 *                       type: object
 *                     byPriority:
 *                       type: array
 *                     byCategory:
 *                       type: array
 *                     recentQueries:
 *                       type: integer
 *                     averageResolutionTimeHours:
 *                       type: integer
 *       500:
 *         description: Server error
 */
router.get('/stats', queryController.getQueryStatistics);

/**
 * @swagger
 * /api/queries/pending:
 *   get:
 *     summary: Get all pending queries
 *     description: Retrieve all queries with pending status, sorted by priority and creation date
 *     tags: [Queries]
 *     responses:
 *       200:
 *         description: Pending queries fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Query'
 *                 count:
 *                   type: integer
 *       500:
 *         description: Server error
 */
router.get('/pending', queryController.getPendingQueries);

/**
 * @swagger
 * /api/queries/{id}:
 *   get:
 *     summary: Get query by ID
 *     description: Retrieve a specific query by its ID
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Query ID
 *     responses:
 *       200:
 *         description: Query fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Query'
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.get('/:id', queryController.getQueryById);

/**
 * @swagger
 * /api/queries/{id}:
 *   put:
 *     summary: Update query
 *     description: Update a query with new information
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Query ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, resolved, closed]
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high, urgent]
 *               category:
 *                 type: string
 *               assignedTo:
 *                 type: string
 *               response:
 *                 type: string
 *     responses:
 *       200:
 *         description: Query updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Query'
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.put('/:id', queryController.updateQuery);

/**
 * @swagger
 * /api/queries/{id}/status:
 *   patch:
 *     summary: Update query status
 *     description: Update only the status of a query
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Query ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, resolved, closed]
 *               response:
 *                 type: string
 *                 description: Required when status is resolved
 *     responses:
 *       200:
 *         description: Query status updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.patch('/:id/status', queryController.updateQueryStatus);

/**
 * @swagger
 * /api/queries/{id}/assign:
 *   patch:
 *     summary: Assign query to admin
 *     description: Assign a query to a specific admin user
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Query ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - assignedTo
 *             properties:
 *               assignedTo:
 *                 type: string
 *                 example: admin@codessey.com
 *     responses:
 *       200:
 *         description: Query assigned successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.patch('/:id/assign', queryController.assignQuery);

/**
 * @swagger
 * /api/queries/{id}:
 *   delete:
 *     summary: Delete query
 *     description: Delete a specific query by ID
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Query ID
 *     responses:
 *       200:
 *         description: Query deleted successfully
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', queryController.deleteQuery);

/**
 * @swagger
 * /api/queries/bulk:
 *   delete:
 *     summary: Bulk delete queries
 *     description: Delete multiple queries at once
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ids
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["60d5ec49f1b2c72b8c8e4f1a", "60d5ec49f1b2c72b8c8e4f1b"]
 *     responses:
 *       200:
 *         description: Queries deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 deletedCount:
 *                   type: integer
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.delete('/bulk', queryController.bulkDeleteQueries);

module.exports = router;
