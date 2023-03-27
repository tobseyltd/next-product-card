import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductCard from '@/components/ProductPreviewCard/preview-card'

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

        <ProductCard
          imgSrc={'/media/image-product-desktop.jpg'}
          imgAlt={'Gabrielle Essence Eau De Parfum'}
          imgSize={300}
          prodCat={'Perfume'}
          prodTitle={'Gabrielle Essence Eau De Parfum'} 
          prodDesc={'A floral and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'} 
          prodPrice={149.99} prodPriceOld={169.99} />

      </main>
    </>
  )
}
