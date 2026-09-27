import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Lead capture API endpoint.
 * TODO: Integrate with Follow Up Boss, your CRM, or email service.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!email || !firstName || !lastName) {
      return res.status(400).json({
        error: 'First name, last name, and email are required',
      });
    }

    // TODO: Add your CRM/webhook integration here
    // Example: await fetch('YOUR_FUB_WEBHOOK', { method: 'POST', body: JSON.stringify(...) });
    console.log('Lead received:', {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you. We will be in touch shortly.',
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
