"use client";

import { useEffect } from "react";
import Script from "next/script";

function GoogleAnalytics() {
  const gaTrackingID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  const googleAnalytics = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());`;

  useEffect(() => {
    // console.log("GA_TRACKING_ID", gaTrackingID);
    // @ts-ignore
    window.gtag("config", gaTrackingID);
  }, [gaTrackingID]);

  return (
    <>
      <Script
        id="google-gtag"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-GH038RM6GX`}
        strategy="beforeInteractive"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{ __html: googleAnalytics }}
        strategy="afterInteractive"
      />
    </>
  );
}

export default GoogleAnalytics;
