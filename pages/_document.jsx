import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API}&libraries=places`}
          defer
        ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
