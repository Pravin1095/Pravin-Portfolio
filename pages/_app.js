import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from "react";
// import bootstrap from 'bootstrap'
import Head from 'next/head'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //  require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []); 
  // useEffect(() => {
  //   import('bootstrap')
  // }, [])

  return (
    <div>
      <Head>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"/> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Sacramento&display=swap" rel="stylesheet" />
      </Head>
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></Script> */}
      

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

