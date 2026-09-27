import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 text-center">
        <h3 className="font-semibold text-gray-900">
          {AppConfig.business.name}
        </h3>
        <p className="mt-1 text-gray-600">{AppConfig.business.agent}</p>
        <p className="text-sm text-gray-500">{AppConfig.business.company}</p>
        <p className="mt-2 text-gray-700">{AppConfig.business.address.full}</p>
        <p className="mt-1">
          <a
            href={AppConfig.business.phoneTel}
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            {AppConfig.business.phone}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href={AppConfig.business.phoneTel}
            className="rounded bg-primary-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-600"
          >
            Call
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(AppConfig.business.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-primary-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-600"
          >
            Directions
          </a>
          <a
            href={AppConfig.business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-primary-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-600"
          >
            Google Reviews
          </a>
        </div>
      </div>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <a
              href={AppConfig.business.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </a>
          </>
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#community">Community</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <a href={AppConfig.business.phoneTel}>Call</a>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
