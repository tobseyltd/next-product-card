import InteractiveRating from "@/components/InteractiveRating/InteractiveRating";
import Header from "./header/header";
import { Tooltip, Image } from "@nextui-org/react";

export default function InteractiveRating_Page(): JSX.Element {

    return (

        <main className="md:w-screen md:h-screen md:p-10 flex flex-col items-center justify-between bg-cream">
            
            <Header />
            <InteractiveRating />

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
        </main>
    )
}