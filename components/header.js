import Head from 'next/head'

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="European Travel Destinations" />
      <meta property="og:description" content="Offering tour packages for individuals or groups." />
      <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg" />
      <meta property="og:url" content="http://euro-travel-example.com/index.htm" />
      <meta property="og:site_name" content="European Travel, Inc." />
      <meta name="twitter:title" content="European Travel Destinations" />
      <meta name="twitter:description" content=" Offering tour packages for individuals or groups." />
      <meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Alt text for image" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous"></link>
      <script type="module" src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.mjs"></script>
    </Head>
  )
}

