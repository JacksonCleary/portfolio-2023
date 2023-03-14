// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { maskSchemeColors } from '../state/globals';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const masksToString = maskSchemeColors.toString();
    const setInitialTheme = `

      const maskScheme = "${masksToString}".split(',');
      const randomIndex = Math.floor(Math.random() * maskScheme.length);
      const randomScheme = maskScheme[randomIndex];

      function getUserPreference() {
        // if(window.localStorage.getItem('theme')) {
        //   return window.localStorage.getItem('theme')
        // }
        // return window.matchMedia('(prefers-color-scheme: dark)').matches 
        //   ? 'dark' 
        //   : 'light'
        return 'light';
      }
      document.body.dataset.theme = getUserPreference();
      document.body.dataset.scheme = randomScheme;
    `;
    return (
      <Html>
        <Head />
        <body>
          {/* <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} /> */}
          <Script id="set-design-vars" strategy="afterInteractive">
            {setInitialTheme}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
