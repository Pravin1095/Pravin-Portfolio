import '../styles/globals.css'


import 'bootstrap/dist/css/bootstrap.css';


import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import { Provider } from 'react-redux' 



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
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Sacramento&display=swap" rel="stylesheet" /> */}
      </Head>

      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></Script> */}

      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"></Script> 
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"></Script>
         <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"></Script> */}

      
      <Provider store={store}>
      <Component {...pageProps} /></Provider>
    </div>
  )
}

export default MyApp

