import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Experience Heritage at Stonebridge"
    description="A premier gated community in Summerlin offering luxury living, top-tier amenities, and an unmatched lifestyle."
  >
    <VerticalFeatureRow
      title="Luxury Living"
      description="Heritage at Stonebridge features beautifully designed homes with premium finishes, open floor plans, and scenic mountain or golf course views. Find your perfect estate in Las Vegas's most desirable master-planned community."
      image="/assets/images/feature.svg"
      imageAlt="Luxury homes in Heritage at Stonebridge Summerlin"
    />
    <VerticalFeatureRow
      title="Expert Local Representation"
      description="Dr. Jan Duffy brings deep expertise in Summerlin and Henderson real estate. As your Berkshire Hathaway HomeServices Nevada Properties agent, she delivers personalized service for buyers and sellers."
      image="/assets/images/feature2.svg"
      imageAlt="Dr. Jan Duffy real estate agent Summerlin"
      reverse
    />
    <VerticalFeatureRow
      title="Full-Service Real Estate"
      description="From first-time buyers to luxury sellers, we handle every step: market analysis, negotiations, inspections, and closing. Your Heritage at Stonebridge journey starts with a single conversation."
      image="/assets/images/feature3.svg"
      imageAlt="Real estate services Heritage at Stonebridge"
    />
  </Section>
);

export { VerticalFeatures };
