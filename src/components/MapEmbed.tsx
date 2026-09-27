import { AppConfig } from '../utils/AppConfig';

const MapEmbed = () => (
  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
    <iframe
      title="Office location – Berkshire Hathaway HomeServices Nevada Properties"
      src={AppConfig.business.googleMapsEmbedUrl}
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div className="flex flex-wrap justify-center gap-4 border-t border-gray-200 bg-gray-50 p-4">
      <a
        href={AppConfig.business.phoneTel}
        className="inline-flex items-center rounded bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600"
      >
        Call
      </a>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(AppConfig.business.address.full)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600"
      >
        Directions
      </a>
      <a
        href={AppConfig.business.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600"
      >
        View Google Reviews
      </a>
    </div>
  </div>
);

export { MapEmbed };
