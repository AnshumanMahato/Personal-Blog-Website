/* 
	This component is pulled from hashnode starter kit
	Used for adding integrations like Google Analytics, Facebook Pixel, Hotjar, 
	Matomo, Fathom, and Plausible Analytics. 
*/
"use client";

import { useEffect } from "react";
import { Publication } from "@/app/schema/graphql";
import Script from "next/script";

type Props = Readonly<{
  publication: {
    integrations: Publication["integrations"];
    url: Publication["url"];
  };
}>;

function Integrations({ publication }: Props) {
  const {
    gaTrackingID,
    fbPixelID,
    hotjarSiteID,
    matomoURL,
    matomoSiteID,
    fathomSiteID,
    fathomCustomDomain,
    fathomCustomDomainEnabled,
    plausibleAnalyticsEnabled,
  } = publication.integrations ?? {};
  const domainURL = new URL(publication.url).hostname;

  const googleAnalytics = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());`;

  let fbPixel = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.defer=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    `;

  if (fbPixelID) {
    fbPixel += `fbq('init', '${encodeURI(fbPixelID)}');`;
  }

  const hotjarForUsers =
    hotjarSiteID &&
    `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${encodeURI(hotjarSiteID)},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;r.defer=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  const matomoAnalytics = `
      var _paq = window._paq = window._paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://${encodeURI(matomoURL || "")}/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '${encodeURI(matomoSiteID || "")}']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/${encodeURI(
          matomoURL || ""
        )}/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
  `;

  useEffect(() => {
    // @ts-ignore
    window.gtag("config", gaTrackingID, {
      transport_url: "https://ping.hashnode.com",
      first_party_collection: true,
    });
  }, [gaTrackingID]);

  return (
    <>
      <Script
        id="google-gtag"
        async
        src={`https://ping.hashnode.com/gtag/js?id=G-72XG3F8LNJ`}
        strategy="beforeInteractive"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{ __html: googleAnalytics }}
        strategy="beforeInteractive"
      />
      {fbPixelID ? (
        <Script
          id="facebook-pixel"
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: fbPixel }}
        />
      ) : null}
      {fathomSiteID && (
        <Script
          id="fathom"
          src={
            fathomCustomDomainEnabled
              ? `https://${fathomCustomDomain}/script.js`
              : "https://cdn.usefathom.com/script.js"
          }
          // @ts-ignore
          // eslint-disable-next-line react/no-unknown-property
          spa="auto"
          // eslint-disable-next-line react/no-unknown-property
          site={fathomSiteID}
          defer
        />
      )}
      {hotjarSiteID && hotjarForUsers && (
        <Script
          id="hotjar"
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: hotjarForUsers }}
        />
      )}
      {matomoURL && (
        <Script
          id="matomo"
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: matomoAnalytics }}
        />
      )}
      {plausibleAnalyticsEnabled && (
        <Script
          id="plausible"
          async
          defer
          data-domain={domainURL}
          src="https://plausible.io/js/plausible.js"
        />
      )}
    </>
  );
}

export default Integrations;
