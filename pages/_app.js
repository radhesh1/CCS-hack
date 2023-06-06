// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;