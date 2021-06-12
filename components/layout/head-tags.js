import Head from 'next/head';

export const HeadTags = () => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />

      <link rel="icon" href="/favicon.png" sizes="16*16" type="image/png" />

      <link rel="stylesheet" type="text/css" href="/list-messages.css" />
      <link rel="stylesheet" type="text/css" href="/styles.css" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />

      <title>Mini Social Media</title>
    </Head>
  </>
);
