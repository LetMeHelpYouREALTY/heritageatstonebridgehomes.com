import { Section } from '../layout/Section';

const HIGHLIGHTS = [
  {
    title: 'Gated Security',
    description:
      '24-hour gated community with controlled access for peace of mind and privacy.',
  },
  {
    title: 'Resort-Style Amenities',
    description:
      'Clubhouse, pools, tennis courts, and walking trails right in your neighborhood.',
  },
  {
    title: 'Summerlin Location',
    description:
      'Premier master-planned community in Las Vegas with top schools and convenient access.',
  },
];

const CommunityHighlights = () => (
  <Section
    title="Why Heritage at Stonebridge"
    description="Discover what makes this Summerlin community one of the most sought-after in Las Vegas."
  >
    <div className="grid gap-8 md:grid-cols-3">
      {HIGHLIGHTS.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export { CommunityHighlights };
