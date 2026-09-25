import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { business } from "~/config/business";
import { pageOgImage } from "~/config/images";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const ogImage = pageOgImage(loc.url.pathname);

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={business.name} />
      <meta name="geo.region" content="US-NV" />
      <meta name="geo.placename" content="Las Vegas, Nevada" />
      <meta name="geo.position" content={`${business.geo.latitude};${business.geo.longitude}`} />
      <meta name="ICBM" content={`${business.geo.latitude}, ${business.geo.longitude}`} />
      {!head.meta.some((m) => "property" in m && m.property === "og:image") && (
        <meta property="og:image" content={ogImage} />
      )}
      {!head.meta.some((m) => m.name === "twitter:image") && (
        <meta name="twitter:image" content={ogImage} />
      )}

      {/* RealScout Script - Load globally for all pages */}
      <script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        crossOrigin="anonymous"
      />

      {/* RealScout Styles */}
      <style>
        {`
					realscout-office-listings {
						--rs-listing-divider-color: rgb(101, 141, 172);
						width: 100%;
						min-height: 400px;
						display: block;
					}
				`}
      </style>

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        const { dangerouslySetInnerHTML, ...otherProps } = s.props || {};
        return (
          // eslint-disable-next-line react/no-danger
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for dynamic styles
          <style key={s.key} {...otherProps} dangerouslySetInnerHTML={s.style} />
        );
      })}
    </>
  );
});
