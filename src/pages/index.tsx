import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResultsSummary from '@/components/ResultsSummary/results-summary'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Preview Card Component</title>
        <meta name="React,Next,Tailwind,Typescript" content="basics practice project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:w-screen md:h-screen flex flex-row justify-center items-center">

        <ResultsSummary Reaction={70} Memory={82} Verbal={61} Visual={62} />

      </main>
    </>
  )
}
