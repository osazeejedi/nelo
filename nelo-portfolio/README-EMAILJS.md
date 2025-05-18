# Setting Up EmailJS for Contact Form

This guide will help you set up EmailJS to enable the contact form on your portfolio website to send emails to your inbox.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows you to send up to 200 emails per month, which should be sufficient for a portfolio website

## Step 2: Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service (e.g., "portfolio_contact")
6. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Here's a simple template example:

```
Subject: New Contact Form Message: {{subject}}

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

5. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to the "Account" tab
2. Find your **Public Key** in the API keys section

## Step 5: Update Your Code

1. Open the `src/components/Contact.jsx` file
2. Replace the placeholder values with your actual IDs:

```javascript
// EmailJS configuration
const SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key
```

## Step 6: Test the Form

1. Run your website locally with `npm run dev`
2. Fill out the contact form and submit it
3. Check your email inbox to verify that you received the message

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify that your EmailJS service is connected properly
- Make sure your template variables match the form field names
- Check if you've reached the free tier limit (200 emails/month)

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration Guide](https://www.emailjs.com/docs/examples/reactjs/)
