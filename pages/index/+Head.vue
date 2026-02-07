<template>
  <title>Freelancers Network | Zero-Commission Freelancing Platform for GCC</title>
  <meta
    name="description"
    content="Connect with verified creators and sellers in the GCC. Web development, mobile apps, graphic design, video editing. 100% earnings for creators, no platform fees."
  />

  <!-- Open Graph -->
  <meta property="og:title" content="Freelancers Network | Zero-Commission Freelancing Platform" />
  <meta property="og:description" content="GCC's first open-source freelancing platform with zero commissions" />
  <meta property="og:image" content="https://freelancers.network/og-image.png" />
  <meta property="og:url" content="https://freelancers.network" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Freelancers Network" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Freelancers Network | Zero-Commission Freelancing" />
  <meta name="twitter:description" content="Connect with verified creators and sellers in the GCC" />
  <meta name="twitter:image" content="https://freelancers.network/og-image.png" />

  <!-- Additional meta -->
  <meta
    name="keywords"
    content="freelance GCC, bahrain freelancers, saudi freelancers, emirati freelancers, web development, mobile development, graphic design, video editing"
  />
  <meta name="author" content="Freelance Founders for Business Systems" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#0D9488" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Structured Data (JSON-LD) -->
  <component :is="'script'" type="application/ld+json">
    {{
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Freelancers Network",
        url: "https://freelancers.network",
        description: "Zero-commission freelancing platform for creators and sellers",
        publisher: {
          "@type": "Organization",
          name: "Freelance Founders for Business Systems",
          logo: "https://freelancers.network/logo.png",
        },
      })
    }}
  </component>
</template>
