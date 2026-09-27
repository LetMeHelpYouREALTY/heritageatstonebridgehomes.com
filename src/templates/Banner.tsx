import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to find your home in Heritage at Stonebridge?"
      subtitle="Schedule a showing or get a free market analysis."
      button={
        <Link href="/#contact">
          <Button>Contact Dr. Jan Duffy</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
