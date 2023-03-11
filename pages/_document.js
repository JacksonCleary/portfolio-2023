// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `

      const maskScheme = ['mint', 'monaco', 'peach', 'sage', 'sea', 'space', 'summer', 'vintage'];
      const randomIndex = Math.floor(Math.random() * maskScheme.length);
      const randomScheme = maskScheme[randomIndex];

      function getUserPreference() {
        // if(window.localStorage.getItem('theme')) {
        //   return window.localStorage.getItem('theme')
        // }
        // return window.matchMedia('(prefers-color-scheme: dark)').matches 
        //   ? 'dark' 
        //   : 'light'
        return 'dark';
      }
      document.body.dataset.theme = getUserPreference();
      document.body.dataset.scheme = randomScheme;
    `;
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
