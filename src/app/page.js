'use client';
import Banner from "@/components/Banner";
import PricePlans from "@/components/PricePlans";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js"
          integrity="sha384-XXXXX" // Мөн integrity аттрибут нэмж ашиглаж болно
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>

      {/* Iframe */}
      <div className="iframe-container relative w-auto mx-4" style={{ paddingBottom: '56.25%' }}>
        <iframe
          onLoad={() => {
            if (window.iFrameResize) {
              window.iFrameResize({}, 'iframe-selector');
            }
          }}
          src="https://d8dbbe518fe24012a9ec2f268559d80f.elf.site"
          style={{
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
      <PricePlans />
    </div>
  );
};