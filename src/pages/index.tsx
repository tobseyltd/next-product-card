import Head from 'next/head'
import { Inter } from 'next/font/google'
import InteractiveRating from '@/components/InteractiveRating/InteractiveRating'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {

  return (
    <>
      <Head>
        <title>Product Preview Card Component</title>
        <meta name="React,Next,Tailwind,Typescript" content="basics practice project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:w-screen md:h-screen flex flex-row justify-center items-center">

        <InteractiveRating />

      </main>
    </>
  )
}
