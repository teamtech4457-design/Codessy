const mongoose = require('mongoose');

/**
 * Contact Form Schema
 * @typedef {Object} ContactForm
 * @property {string} email - Contact person's email address
 * @property {string} name - Full name of the contact person
 * @property {string} phone - Contact phone number
 * @property {string} companyName - Name of the company
 * @property {string} companyEmail - Official company email address
 * @property {string} projectTitle - Title of the project
 * @property {string} projectDescription - Detailed description of the project
 * @property {Date} createdAt - Timestamp when the form was submitted
 * @property {Date} updatedAt - Timestamp when the form was last updated
 */

const contactFormSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email address'
            ]
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long'],
            maxlength: [100, 'Name cannot exceed 100 characters']
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
            match: [
                /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
                'Please provide a valid phone number'
            ]
        },
        companyName: {
            type: String,
            required: [true, 'Company name is required'],
            trim: true,
            minlength: [2, 'Company name must be at least 2 characters long'],
            maxlength: [200, 'Company name cannot exceed 200 characters']
        },
        companyEmail: {
            type: String,
            required: [true, 'Company email is required'],
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid company email address'
            ]
        },
        projectTitle: {
            type: String,
            required: [true, 'Project title is required'],
            trim: true,
            minlength: [5, 'Project title must be at least 5 characters long'],
            maxlength: [200, 'Project title cannot exceed 200 characters']
        },
        projectDescription: {
            type: String,
            required: [true, 'Project description is required'],
            trim: true,
            minlength: [20, 'Project description must be at least 20 characters long'],
            maxlength: [2000, 'Project description cannot exceed 2000 characters']
        }
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
        versionKey: false // Removes __v field
    }
);

// Add indexes for better query performance
contactFormSchema.index({ email: 1 });
contactFormSchema.index({ companyEmail: 1 });
contactFormSchema.index({ createdAt: -1 });

// Add a virtual for formatted creation date
contactFormSchema.virtual('formattedDate').get(function() {
    return this.createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
});

// Ensure virtuals are included when converting to JSON
contactFormSchema.set('toJSON', { virtuals: true });
contactFormSchema.set('toObject', { virtuals: true });

/**
 * Contact Form Model
 */
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
