import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#community">Community</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <a href={AppConfig.business.phoneTel}>Call</a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Luxury Homes in\n'}
            <span className="text-primary-500">Heritage at Stonebridge</span>
          </>
        }
        description="Summerlin's premier gated community. Discover exceptional real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties."
        button={
          <Link href="/#contact">
            <Button xl>Get in Touch</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
