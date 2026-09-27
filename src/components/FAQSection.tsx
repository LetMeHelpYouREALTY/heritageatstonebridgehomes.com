/* eslint-disable prettier/prettier */
import Head from 'next/head';

import { Section } from '../layout/Section';

const FAQ_ITEMS = [
  {
    question: 'What is Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge is a premium gated community in Summerlin, Las Vegas, featuring luxury homes, resort-style amenities, and a highly desirable location in the master-planned community.',
  },
  {
    question: 'What types of homes are available in Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge offers a variety of single-family homes ranging from executive estates to custom luxury residences, many with mountain and golf course views.',
  },
  {
    question: 'What amenities does Heritage at Stonebridge offer?',
    answer:
      "The community offers a private clubhouse, swimming pools, tennis courts, walking trails, parks, and 24-hour gated security. Residents also enjoy access to Summerlin's extensive parks and recreational facilities.",
  },
  {
    question: 'How can I schedule a showing for a home in Heritage at Stonebridge?',
    answer:
      'Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Call, email, or use the contact form on this site to schedule a private showing.',
  },
  {
    question: 'What schools serve Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge is served by the highly-rated Clark County School District schools in Summerlin, including top-rated elementary, middle, and high schools.',
  },
];

const FAQSection = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>
      <Section
        title="Frequently Asked Questions"
        description="Common questions about Heritage at Stonebridge and luxury real estate in Summerlin."
      >
        <div className="space-y-6 text-left">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 hover:text-primary-500">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
};

export { FAQSection };
