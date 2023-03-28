
import { useEffect } from "react"
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast'


type ResultsSummaryProps = {
    Reaction: number,
    Memory: number,
    Verbal: number,
    Visual: number

}

export default function ResultsSummary({
    Reaction,
    Memory,
    Verbal,
    Visual
}: ResultsSummaryProps) {


    const calcResult = (): number => {
        return Math.floor((Number(Reaction) + Number(Memory) + Number(Verbal) + Number(Visual)) / 4)
    }

    const showGoodness = (result: number): string => {
        switch (true) {

            case (result < 60):
                return 'Not good';

            case (result > 60 && result < 70):
                return 'Ok';

            case (result > 70 && result < 85):
                return 'Great!';

            default: return 'Outstanding!'
        }
    }

    const notify = () => {

        toast('Good Job! Feel free to use this component in your projects', {
            icon: '👏',
            position: "bottom-center"
        });
    }


    let result = calcResult()

    useEffect(() => {
        calcResult()
    }, [Reaction, Memory, Verbal, Visual])


    return (

        <div className="inline-block wrapper md:flex md:w-6/12 shadow-lg shadow-light-royal-blue/20 rounded-3xl">

            <div className="result relative z-20 md:rounded-l-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-12 py-10 mt-5 md:mt-0 md:w-3/6 flex flex-col items-center ">
                <p className="text-xl text-slate-400 font-medium pb-6">Your Result</p>

                <div className="result-numbers bg-gradient-to-b from-violet-blue to-persian-blue rounded-full p-10 w-2/4 md:w-5/6 flex-col flex items-center ">
                    <p className="text-5xl font-bold text-white">{result}</p>
                    <p className="text-slate-400">of 100</p>
                </div>

                <p className="text-2xl text-white font-medium pt-5 pb-2">{showGoodness(result)}</p>
                <p className="text-slate-400 leading-4 text-center">You scored higher than 65% of the people who have taken these tests.</p>
            </div>

            <div className="summary h-96 md:h-full md:w-3/6 flex flex-col justify-between px-5 py-10 -mt-5 md:-mt-0 bg-white md:rounded-r-3xl">
                <p className="text-xl font-medium pb-3">Summary</p>

                <div className="reaction flex bg-light-red/10 rounded-lg px-3 py-1 justify-between">
                    <div className="icon-wrapper flex flex-row">
                        <Image
                            src='\media\summary-component\icon-reaction.svg'
                            width={15}
                            height={15}
                            alt=''
                            role={''}
                        />
                        <p className="font-medium text-light-red/80 pl-2">Reaction</p>
                    </div>

                    <div className="summary-numbers flex flex-row pl-5">
                        <p className="font-bold pr-2">{Reaction}</p>
                        <p className="font-medium text-slate-400">/ 100</p>
                    </div>
                </div>

                <div className="reaction flex bg-orange-yellow/10 rounded-lg px-3 py-1 justify-between">
                    <div className="icon-wrapper flex flex-row">
                        <Image
                            src='\media\summary-component\icon-memory.svg'
                            width={15}
                            height={15}
                            alt=''
                            role={''}
                        />
                        <p className="font-medium text-orange-yellow/80 pl-2">Memory</p>
                    </div>

                    <div className="summary-numbers flex flex-row pl-5">
                        <p className="font-bold pr-2">{Memory}</p>
                        <p className="font-medium text-slate-400">/ 100</p>
                    </div>
                </div>

                <div className="reaction flex bg-green-teal/10 rounded-lg px-3 py-1 justify-between">
                    <div className="icon-wrapper flex flex-row">
                        <Image
                            src='\media\summary-component\icon-verbal.svg'
                            width={15}
                            height={15}
                            alt=''
                            role={''}
                        />
                        <p className="font-medium text-green-teal/80 pl-2">Verbal</p>
                    </div>

                    <div className="summary-numbers flex flex-row pl-5">
                        <p className="font-bold pr-2">{Verbal}</p>
                        <p className="font-medium text-slate-400">/ 100</p>
                    </div>
                </div>

                <div className="reaction flex bg-cobalt-blue/10 rounded-lg px-3 py-1 justify-between">
                    <div className="icon-wrapper flex flex-row">
                        <Image
                            src='\media\summary-component\icon-visual.svg'
                            width={15}
                            height={15}
                            alt=''
                            role={''}
                        />
                        <p className="font-medium text-cobalt-blue/80 pl-2">Visual</p>
                    </div>

                    <div className="summary-numbers flex flex-row pl-5">
                        <p className="font-bold pr-2">{Visual}</p>
                        <p className="font-medium text-slate-400">/ 100</p>
                    </div>
                </div>

                <Toaster />

                <button 
                    onClick={notify}
                    className="bg-dark-gray-blue hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-3 mt-5 rounded-3xl text-white text-sm">Continue</button>
            </div>
        </div>
    )
}