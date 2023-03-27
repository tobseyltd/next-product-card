import ProductCard from "@/components/ProductPreviewCard/preview-card";
import Image from "next/image";
import Header from "./header/header";
import { Tooltip } from '@nextui-org/react';



export default function Product_Card_Page() {

    return (

        <div className="justify-between 2xl:p-10 2xl:w-screen 2xl:h-screen 2xl:flex 2xl:flex-col 2xl:items-center  bg-cream">


            <Header />
            <ProductCard
                imgSrc={"/media/image-product-desktop.jpg"}
                imgAlt={"Gabrielle Essence Eau De Parfum"}
                imgSize={300} prodCat={"Perfume"}
                prodTitle={"Gabrielle Essence Eau De Parfum"}
                prodDesc={"A floral and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."}
                prodPrice={149.99}
                prodPriceOld={169.99} />

            <section className="2xl:w-screen 2xl:flex 2xl:flex-col 2xl:items-center">
                <div className="flex p-5  2xl:w-4/6 justify-center items-center">

                    <p className="mr-5 font-bold">Stack:</p>
                    <Tooltip content={"Next.Js React Framework"}>
                        <Image
                            src="/media/next.svg"
                            width={60}
                            height={60}
                            alt="Typescript"
                            className="mr-4"
                        />
                    </Tooltip>

                    <Tooltip content={"Tailwind CSS Framework"}>
                        <Image
                            src="/media/tailwind-css.svg"
                            width={40}
                            height={40}
                            alt="Typescript"
                            className="mr-5"
                        />
                    </Tooltip>

                    <Tooltip content={"Html 5"}>
                        <Image
                            src="/media/html5.svg"
                            width={25}
                            height={25}
                            alt="Typescript"
                            className="mr-5"
                        />
                    </Tooltip>

                    <Tooltip content={"Typescript"}>
                        <Image
                            src="/media/typescript.svg"
                            width={28}
                            height={28}
                            alt="Typescript"
                        />
                    </Tooltip>
                </div>

            </section>

        </div>
    )
}