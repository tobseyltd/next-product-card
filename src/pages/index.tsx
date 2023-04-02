import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Testimonials from './components/testimonials-grid'



const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {


  return (
    <>
      <Head>
        <title>Christian Seyboth - Frontend Developer</title>
        <meta name="React,Next,Tailwind,Typescript" content="basics practice project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className=" bg-cream background">

        <Testimonials />

      </main>
    </>
  )
}

