import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
          <link
          href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
          rel="stylesheet"
          key="googlefont"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
