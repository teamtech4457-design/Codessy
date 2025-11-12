const express = require('express');
const contactFormController = require('../controller.js/contactform.controller');

const router = express.Router();

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a new contact form
 *     description: Create a new contact form submission and send email notification to campaignwalatech@gmail.com
 *     tags: [Contact Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - name
 *               - phone
 *               - companyName
 *               - companyEmail
 *               - projectTitle
 *               - projectDescription
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Contact person's email address
 *                 example: john.doe@example.com
 *               name:
 *                 type: string
 *                 description: Full name of the contact person
 *                 example: John Doe
 *               phone:
 *                 type: string
 *                 description: Contact phone number
 *                 example: +1234567890
 *               companyName:
 *                 type: string
 *                 description: Name of the company
 *                 example: Tech Solutions Inc.
 *               companyEmail:
 *                 type: string
 *                 format: email
 *                 description: Official company email address
 *                 example: info@techsolutions.com
 *               projectTitle:
 *                 type: string
 *                 description: Title of the project
 *                 example: E-commerce Website Development
 *               projectDescription:
 *                 type: string
 *                 description: Detailed description of the project
 *                 example: We need a modern e-commerce platform with payment gateway integration, inventory management, and customer portal.
 *     responses:
 *       201:
 *         description: Contact form submitted successfully
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
 *                   example: Contact form submitted successfully! We will get back to you soon.
 *                 data:
 *                   $ref: '#/components/schemas/ContactForm'
 *       400:
 *         description: Validation error or missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', contactFormController.createContactForm.bind(contactFormController));

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get all contact form submissions
 *     description: Retrieve all contact form submissions with pagination and search
 *     tags: [Contact Forms]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: -createdAt
 *         description: Sort field (prefix with - for descending)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for name, email, company, or project title
 *     responses:
 *       200:
 *         description: List of contact forms retrieved successfully
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
 *                   example: Contact forms retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactForm'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     totalItems:
 *                       type: integer
 *                     itemsPerPage:
 *                       type: integer
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', contactFormController.getAllContactForms.bind(contactFormController));

/**
 * @swagger
 * /api/contact/stats:
 *   get:
 *     summary: Get contact form statistics
 *     description: Retrieve statistics about contact form submissions
 *     tags: [Contact Forms]
 *     responses:
 *       200:
 *         description: Statistics retrieved successfully
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
 *                   example: Statistics retrieved successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalSubmissions:
 *                       type: integer
 *                       example: 150
 *                     todaySubmissions:
 *                       type: integer
 *                       example: 5
 *                     recentSubmissions:
 *                       type: array
 *                       items:
 *                         type: object
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/stats', contactFormController.getContactFormStats.bind(contactFormController));

/**
 * @swagger
 * /api/contact/{id}:
 *   get:
 *     summary: Get a contact form submission by ID
 *     description: Retrieve a single contact form submission by its ID
 *     tags: [Contact Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact form ID
 *     responses:
 *       200:
 *         description: Contact form retrieved successfully
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
 *                   example: Contact form retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/ContactForm'
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Contact form not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', contactFormController.getContactFormById.bind(contactFormController));

/**
 * @swagger
 * /api/contact/{id}:
 *   put:
 *     summary: Update a contact form submission
 *     description: Update an existing contact form submission by ID
 *     tags: [Contact Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact form ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               companyName:
 *                 type: string
 *               companyEmail:
 *                 type: string
 *                 format: email
 *               projectTitle:
 *                 type: string
 *               projectDescription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact form updated successfully
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
 *                   example: Contact form updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/ContactForm'
 *       400:
 *         description: Validation error or invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Contact form not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', contactFormController.updateContactForm.bind(contactFormController));

/**
 * @swagger
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact form submission
 *     description: Delete a contact form submission by ID
 *     tags: [Contact Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact form ID
 *     responses:
 *       200:
 *         description: Contact form deleted successfully
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
 *                   example: Contact form deleted successfully
 *                 data:
 *                   $ref: '#/components/schemas/ContactForm'
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Contact form not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', contactFormController.deleteContactForm.bind(contactFormController));

module.exports = router;
