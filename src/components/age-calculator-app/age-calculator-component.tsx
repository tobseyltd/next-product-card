import { Input, Spacer } from "@nextui-org/react"
import Image from "next/image"
import React, { useState } from "react"
import { replaceValidationUI } from "./helper";
import { useEffect } from "react";



export default function AgeCalculator(): JSX.Element {

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    const [resultYears, setResultYears] = useState(0)
    const [resultMonths, setResultMonths] = useState(0)
    const [resultDays, setResultDays] = useState(0)


    const dateFormatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: 'numeric' })

    const actualDate = new Date()
    const birthDate = new Date(year, month - 1, day)

    const actualDateFormatted = dateFormatter.format(actualDate)
    const birthDateFormatted = dateFormatter.format(birthDate)
    const actualDateTimeStamp = new Date(actualDateFormatted).getTime()
    const birthDateTimeStamp = new Date(birthDateFormatted).getTime()


    // Calculating Age based on Input Function //////////////////////////////////
    const calcAge = (): void => {
        let calc;

        if (actualDateTimeStamp > birthDateTimeStamp) {
            calc = new Date(actualDateTimeStamp - birthDateTimeStamp);
        }
        else {
            calc = new Date(birthDateTimeStamp - actualDateTimeStamp);
        }

        const calcFormat = [calc.getDate(), calc.getMonth(), calc.getFullYear()]

        const days_passed = Math.abs(Number(calcFormat[0]) + 1);
        const months_passed = Math.abs(Number(calcFormat[1] + 1));
        const years_passed = Math.abs(Number(calcFormat[2]) - 1970);

        setResultYears(years_passed)
        setResultMonths(months_passed)
        setResultDays(days_passed)
    }
    /////////////////////////////////////////////////////////////////////////////



    // Replace the validation UI for all forms /////////////////////////////////
    const replaceFunc = (): void => {
        const forms = document.querySelectorAll<HTMLElement>("form");

        forms.forEach((form, index) => {
            replaceValidationUI(forms[index])
        })
    }
    ////////////////////////////////////////////////////////////////////////////
   

    const handleDayChange = (event: any): void => {
        setDay(event.target.value);
    }

    const handleMonthChange = (event: any): void => {
        setMonth(event.target.value);
    }

    const handleYearChange = (event: any): void => {
        setYear(event.target.value);
    }

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        calcAge()
    }


    return (
        <>
            <section className="w-screen h-screen xl:flex xl:justify-center xl:items-center bg-cream">

                <div className="inline-block xl:flex xl:flex-col xl:w-5/12 bg-white p-20 rounded-l-xl rounded-tr-xl rounded-br-xtra m-5">
                    <form onLoad={replaceFunc} onSubmit={handleSubmit}>
                        <div className="flex flex-row md:-mb-7">

                            <div className="flex flex-col">
                                <label className="text-xxs font-bold tracking-widest text-black/60">DAY</label>
                                <Spacer y={0.4} />
                                <input type="number" name="day" className=" text-2xl font-bold border border-black/30 rounded-lg px-5 py-1 w-32" onChange={handleDayChange} placeholder="DD" required max={31} />
                                <Spacer x={7} />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xxs font-bold tracking-widest text-black/60">MONTH</label>
                                <Spacer y={0.4} />
                                <input type="number" name="month" className=" text-2xl font-bold border border-black/30 rounded-lg px-5 py-1 w-32" onChange={handleMonthChange} placeholder="MM" required max={12} />
                                <Spacer x={7} />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xxs font-bold tracking-widest text-black/60">YEAR</label>
                                <Spacer y={0.4} />
                                <input type="number" name="year" className=" text-2xl font-bold border border-black/30 rounded-lg px-5 py-1 w-32" onChange={handleYearChange} placeholder="YYYY" required max={2023} />
                                <Spacer x={7} />
                            </div>
                        </div>

                        <div className="flex flex-row items-center">
                            <hr style={{ width: '100%', color: "black" }} />
                            <div>
                                <button type="submit"><Image src="/media/icon-arrow.svg" width={80} height={80} alt="" className="rounded-full p-5 bg-purple" /></button>
                            </div>
                            <hr style={{ width: '100%', color: "black" }} className="md:hidden" />
                        </div>

                        <div className="flex flex-col mt-5">
                            <span className="text-7xl font-black leading-10 mb-8 italic"><span className="text-purple">{resultYears || '- -'}</span> years</span>
                            <span className="text-7xl font-black leading-10 mb-8 italic"><span className="text-purple"> {resultMonths || '- -'}</span> months</span>
                            <span className="text-7xl font-black leading-10 mb-8 italic"><span className="text-purple"> {resultDays || '- -'}</span> days</span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}