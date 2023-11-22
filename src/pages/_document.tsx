import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DVJG6CWTNM"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-DVJG6CWTNM');`}
      </Script>
    </>
  );
};

export default function Document() {
  return (
    <Html lang="en">
      <GoogleAnalyticsScript />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
