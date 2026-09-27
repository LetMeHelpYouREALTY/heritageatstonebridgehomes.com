import { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // TODO: Replace with your API endpoint or Follow Up Boss / CRM webhook
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      // Fallback: open default mailto if API not configured
      const mailto = `mailto:${AppConfig.business.email}?subject=Heritage at Stonebridge Inquiry&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      window.location.href = mailto;
      setStatus('success');
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">Get in Touch</h3>
      <p className="mb-6 text-gray-600">
        Interested in Heritage at Stonebridge? Send a message and we&apos;ll
        respond shortly.
      </p>

      {status === 'success' && (
        <div className="mb-4 rounded bg-green-50 p-4 text-green-800">
          Thank you! We&apos;ll be in touch soon.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-4 rounded bg-red-50 p-4 text-red-800">
          Something went wrong. Please try calling or emailing directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="rounded border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="rounded border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-block rounded-md bg-primary-500 px-4 py-2 text-lg font-semibold text-white hover:bg-primary-600 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        By submitting, you agree to be contacted about real estate services.
        Your information will not be shared with third parties.
      </p>
    </div>
  );
};

export { LeadCaptureForm };
