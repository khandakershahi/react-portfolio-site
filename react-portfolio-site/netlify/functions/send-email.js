const SibApiV3Sdk = require('sib-api-v3-sdk');

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const { name, email, subject, message } = payload;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required.' })
      };
    }

    const apiKey = process.env.BREVO_API_KEY;
    const fromEmail = process.env.BREVO_FROM_EMAIL || 'hello@khandakershahi.com';
    const fromName = process.env.BREVO_FROM_NAME || 'Portfolio Contact';
    const toEmail = process.env.BREVO_TO_EMAIL || 'hello@khandakershahi.com';

    if (!apiKey) {
      throw new Error('Missing BREVO_API_KEY');
    }

    // Configure API client
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKeyAuth = defaultClient.authentications['api-key'];
    apiKeyAuth.apiKey = apiKey;

    // Create transactional email API instance
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    
    // Prepare email data
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { name: fromName, email: fromEmail };
    sendSmtpEmail.to = [{ email: toEmail }];
    sendSmtpEmail.replyTo = { email: email, name: name };
    sendSmtpEmail.subject = `[Portfolio] ${subject}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;
    sendSmtpEmail.textContent = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;

    // Send the email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Brevo API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to send email.' })
    };
  }
};
