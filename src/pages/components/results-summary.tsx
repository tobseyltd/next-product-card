import { useState } from "react";
import { Input, Spacer, Tooltip } from "@nextui-org/react";
import ResultsSummary from "@/components/ResultsSummary/results-summary";
import Header from "./header/header";
import Image from "next/image";


export default function ReultsSummary_Page() {

    const [reaction, setReaction] = useState();
    const [memory, setMemory] = useState();
    const [verbal, setVerbal] = useState();
    const [visual, setVisual] = useState();

    const handle_ReactionChange = (event: any) => {
        setReaction(event.target.value)
    }

    const handle_MemoryChange = (event: any) => {
        setMemory(event.target.value)
    }

    const handle_VerbalChange = (event: any) => {
        setVerbal(event.target.value)
    }

    const handle_VisualChange = (event: any) => {
        setVisual(event.target.value)
    }


    return (
        <main className="md:w-screen md:h-screen md:p-10 flex flex-col items-center justify-between bg-cream">
            
            <Header />
            
            <section className="w-18/12 flex flex-row">

                <div className="hidden md:pl-20 md:w-5/12 md:flex md:flex-col md:justify-center">
                    <label>Change Component Content</label>

                    <div className="mt-5">
                        <Input
                            aria-label="Change Reaction Summary"
                            width="300px"
                            type="number"
                            placeholder="Insert Reaction Summary (number)"
                            role={'Reaction Summary Change'}
                            onChange={handle_ReactionChange}

                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Memory Summary"
                            width="300px"
                            type="number"
                            placeholder="Insert Memory Summary (number)"
                            role={'Memory Summary Change'}
                            onChange={handle_MemoryChange}
                            min={1}
                            max={100}

                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Verbal Summary"
                            width="300px"
                            type="number"
                            placeholder="Insert Verbal Summary (number)"
                            role={'Verbal Summary Change'}
                            onChange={handle_VerbalChange}

                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Visual Summary"
                            width="300px"
                            type="number"
                            placeholder="Insert Visual Summary (number)"
                            role={'Visual Summary Change'}
                            onChange={handle_VisualChange}

                        />
                    </div>
                </div>

                <ResultsSummary
                    Reaction={reaction || 80}
                    Memory={memory || 89}
                    Verbal={verbal || 61}
                    Visual={visual || 62}
                />

            </section>

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