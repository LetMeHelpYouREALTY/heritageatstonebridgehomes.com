/* eslint-disable simple-import-sort/imports */
import { CommunityHighlights } from '../components/CommunityHighlights';
import { FAQSection } from '../components/FAQSection';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { MapEmbed } from '../components/MapEmbed';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div id="community">
      <CommunityHighlights />
    </div>
    <VerticalFeatures />
    <div id="contact">
      <Section
        title="Contact Us"
        description="Get in touch about Heritage at Stonebridge homes."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <LeadCaptureForm />
          <div>
            <MapEmbed />
          </div>
        </div>
      </Section>
    </div>
    <FAQSection />
    <Banner />
    <Footer />
  </div>
);

export { Base };
