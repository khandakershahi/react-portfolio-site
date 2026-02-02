# Brevo API Configuration Guide

## Get your Brevo API Key

1. Log in to your Brevo account: https://app.brevo.com/
2. Go to **SMTP & API** → **API Keys**
3. Create a new API key or copy an existing one
4. Add it to your `.env` file as `BREVO_API_KEY`

## For Local Testing

Update `.env`:
```env
BREVO_API_KEY=your-api-key-here
BREVO_FROM_EMAIL=hello@khandakershahi.com
BREVO_TO_EMAIL=hello@khandakershahi.com
```

## For Netlify Production

Set environment variables in Netlify dashboard:
- Site Settings → Environment Variables
- Add:
  - `BREVO_API_KEY` = your API key
  - `BREVO_FROM_EMAIL` = hello@khandakershahi.com
  - `BREVO_TO_EMAIL` = hello@khandakershahi.com
  - `BREVO_FROM_NAME` = Portfolio Contact (optional)

## For Hostinger

Since Hostinger doesn't support Netlify Functions, you have two options:

### Option 1: Use Brevo API directly from the frontend
Set in `.env`:
```env
VITE_BREVO_API_KEY=your-api-key-here
VITE_CONTACT_API_URL=https://api.brevo.com/v3/smtp/email
```

### Option 2: Create a backend API on your server
Upload a PHP/Node.js script to handle the form submission and call Brevo API from there.
