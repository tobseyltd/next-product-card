import Image from "next/image"
import { useEffect, useState } from "react"
import { Grid } from "@nextui-org/react"
import { setThankYou_Screen, setActive, notify } from "./helper"
import { Toaster } from "react-hot-toast"


export default function InteractiveRating(): JSX.Element {

    const [rating, setRating] = useState(0)

    const handleRating = (event: any): void => {
        setRating(event.target.value)
    }

    useEffect(() => {
        setActive();
    }, [])

    return (
        <section>
            <div id='rating-wrapper' className="rating-wrapper rounded-3xl bg-dark-gray-blue/80 bg-gradient-to-b from-dark-blue/60 to-very-dark-blue/80 inline-block md:flex md:flex-col md:w-96 p-10">

                <div className="content-wrapper">
                    <div className="icon-wrapper rounded-full bg-dark-blue w-10 p-5 mb-5 flex flex-row justify-center items-center">
                        <Image
                            src='\media\interactive-rating-component\icon-star.svg'
                            width={15}
                            height={15}
                            alt=''
                            className="absolute"
                        />
                    </div>

                    <p className="text-xl mb-2 text-white">How did we do?</p>
                    <p className="text-white/60 leading-5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                    <div className="rating-wrapper flex flex-row justify-between mt-7 text-center">
                        <Grid><button onClick={handleRating} id='btn' className="rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium" value={1}>1</button></Grid>
                        <Grid><button onClick={handleRating} id='btn' className="btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium" value={2}>2</button></Grid>
                        <Grid><button onClick={handleRating} id='btn' className="btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium" value={3}>3</button></Grid>
                        <Grid><button onClick={handleRating} id='btn' className="btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium" value={4}>4</button></Grid>
                        <Grid><button onClick={handleRating} id='btn' className="btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium" value={5}>5</button></Grid>
                    </div>

                    <Toaster />
                    <button
                        onClick={rating === 0 ? notify : setThankYou_Screen}
                        className="bg-orange hover:bg-medium-grey rounded-3xl mt-8 p-2 text-white font-medium uppercase tracking-wide w-full">Submit
                    </button>
                </div>

                <div className="hidden thank-you-wrapper">
                    <div className="flex flex-col justify-center items-center">

                        <Image
                            src='\media\interactive-rating-component\illustration-thank-you.svg'
                            width={150}
                            height={150}
                            alt=''
                        />

                        <p className="text-orange/80 bg-dark-gray-blue/60  py-1 rounded-3xl text-center w-9/12 tracking-wide mt-8">You selected {rating} out of 5</p>
                        <p className="text-3xl text-white mt-7 font-semibold">Thank You!</p>
                        <p className="text-white/70 text-center mt-2 leading-5">We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}