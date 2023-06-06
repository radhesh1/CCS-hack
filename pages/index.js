import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Hero_Lol from '../components/Home/Hero_Lol'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahayak</title>
        <meta name="description" content="The quickest way to reach to the nearest of healthcare weather in case of any hard conditions like weather,etc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      
      <main >
        <Hero_Lol />
      </main>
    </>
  )
}
