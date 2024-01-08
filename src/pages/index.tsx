import Head from "next/head";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import ProductList from "~/components/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qtag - QR Code Dog Tag - QR Code Pet Tag </title>
        <meta
          name="description"
          content="QTag is the safest pet tag in the world! Add unlimited contact information and receive SMS, email, and push notifications when your QTag is scanned."
        />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />

        {/* Open Graph */}
        <meta property="og:site_name" content="QTag" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QTag - QR Code Pet Tag" />
        <meta
          property="og:description"
          content="QTag is the safest pet tag in the world! Add unlimited contact information and receive SMS, email, and push notifications when your QTag is scanned."
        />
        <meta property="og:url" content="https://qpaw.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qtag" />
        <meta name="twitter:creator" content="@qtag" />
        <meta name="twitter:title" content="QTag - QR Code Pet Tag" />
        <meta
          name="twitter:description"
          content="QTag is the safest pet tag in the world! Add unlimited contact information and receive SMS, email, and push notifications when your QTag is scanned."
        />
      </Head>
      <main className={`flex min-h-screen flex-col`}>
        <Header />
        <Hero />
        {/* Create a good section here with similar styling. I want some text on the left and an image on the right for this section. With good copy  */}
        <ProductList />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
