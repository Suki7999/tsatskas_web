
'use client';
import Head from "next/head";
import React from 'react'

export default function page() {
  return (
    <div className="h-screen">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js"
          integrity="sha384-XXXXX" // Мөн integrity аттрибут нэмж ашиглаж болно
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <iframe
        onLoad={() => {
          if (window.iFrameResize) {
            window.iFrameResize({}, "iframe-selector");
          }
        }}
        src="https://d8dbbe518fe24012a9ec2f268559d80f.elf.site"
        style={{ border: "none", width: "100%", height: "100%" }}
        // className="border-0, w-full, h-auto"
      ></iframe>
    </div>
  );
}
