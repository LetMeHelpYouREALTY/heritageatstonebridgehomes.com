import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

const META_PIXEL_ID = "1751251572842748";

const GOOGLE_TAG_ID =
  (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_GOOGLE_TAG_ID : undefined) ?? "AW-10990620522";

/**
 * Queue the ads tag and the Meta pixel immediately. Download the libraries
 * on the first tap, or 15 seconds after load, so they stay off the hero paint.
 * A click still calls gtag() before gtag.js arrives, and that click starts the download.
 */
function deferredTagScript(tagId: string | undefined): string {
  const gtagSetup = tagId
    ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${tagId}');`
    : "";
  const gtagLoad = tagId
    ? `var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=${tagId}';document.head.appendChild(g);`
    : "";
  const conversion = tagId
    ? `document.addEventListener('click',function(e){loadTags();var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';var s=/realscout\\.com/i.test(h)?'AW-10990620522/oggzCNmKmKUdEOqe3vgo':/^tel:/i.test(h)?'AW-10990620522/PHRcCNyKmKUdEOqe3vgo':null;if(s)gtag('event','conversion',{send_to:s,transport_type:'beacon'});},true);`
    : "";
  return `(function(){${gtagSetup}!function(f,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window);fbq('init','${META_PIXEL_ID}');fbq('track','PageView');function loadTags(){if(window.__hsbTags)return;window.__hsbTags=1;${gtagLoad}var t=document.createElement('script');t.async=true;t.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(t);}['pointerdown','keydown'].forEach(function(ev){document.addEventListener(ev,loadTags,{once:true,passive:true,capture:true});});${conversion}function late(){setTimeout(loadTags,15000);}if(document.readyState==='complete')late();else window.addEventListener('load',late,{once:true});})();`;
}

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <script dangerouslySetInnerHTML={deferredTagScript(GOOGLE_TAG_ID)} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
