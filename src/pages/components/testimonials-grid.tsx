
import Image from "next/image";


export default function Testimonials(): JSX.Element {

    return (

        <>
            <section className="w-screen h-screen grid md:grid-cols-4 md:grid-row-2 gap-8 p-10 md:p-20 lg:p-40 bg-cream">

                {/* Card 1 */}
                <div className="grid h-max md:col-span-2 px-10 md:px-10 py-10 bg-moderate-violet rounded-3xl shadow-xl">

                    <div className="w-full flex flex-row items-center justify-start">
                        <Image src={'/media/image-daniel.jpg'} width={40} height={40} alt='' className="rounded-full mr-5 border-2 border-white" />
                        <div className="flex flex-col justify-center">
                            <p className="text-white/80 text-sm font-bold -mb-1">Daniel Clifford</p>
                            <p className="text-white/60 text-sm">Verified Graduate</p>
                        </div>
                    </div>

                    <p className="text-white text-xl font-bold my-5">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny&apos;s worth.</p>
                    <p className="bg-moderate-violet text-white/60 leading-5">&quot;I was an EMT for many years before I joined the bootcamp. I&apos;ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I&apos;ve successfully switched careers, working as a Software Engineer at a VR startup.&quot;</p>
                </div>

                {/* Card 2 */}
                <div className="grid px-10 md:px-10 py-10 rounded-3xl bg-dark-grayish-blue shadow-xl">

                    <div className="w-full flex flex-row items-center justify-start">
                        <Image src={'/media/image-jonathan.jpg'} width={40} height={40} alt='' className="rounded-full mr-5 border-2 border-white" />
                        <div className="flex flex-col justify-center">
                            <p className="text-white/80 text-sm font-bold -mb-1">Daniel Clifford</p>
                            <p className="text-white/60 text-sm">Verified Graduate</p>
                        </div>
                    </div>

                    <p className="text-white text-xl font-bold my-5">The team was very supportive and kept me motivated.</p>
                    <p className="bg-dark-grayish-blue text-white/60 leading-5">&quot;I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I&apos;ve made in myself.&quot;</p>
                </div>

                {/* Card 3 */}
                <div className="row-end-6 grid px-10 md:px-10 py-10 rounded-3xl bg-white md:row-span-2 shadow-xl">

                    <div className="w-full flex flex-row items-center justify-start">
                        <Image src={'/media/image-kira.jpg'} width={40} height={40} alt='' className="rounded-full mr-5 border-2 border-white" />
                        <div className="flex flex-col justify-center">
                            <p className="text-black/80 text-sm font-bold -mb-1">Kira Whittle</p>
                            <p className="text-black/60 text-sm">Verified Graduate</p>
                        </div>
                    </div>
                    <p className="text-black text-xl font-bold my-5">Such a life-changing experience. Highly recommended!</p>
                    <p className="bg-white text-black/60 leading-5">&quot;Before joining the bootcamp, I&apos;ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I&apos;ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!&quot;</p>
                </div>

                {/* Card 4 */}
                <div className="grid px-10 md:px-14 py-10 rounded-3xl bg-white shadow-xl">

                    <div className="w-full flex flex-row items-center justify-start">
                        <Image src={'/media/image-jeanette.jpg'} width={40} height={40} alt='' className="rounded-full mr-5 border-2 border-white" />
                        <div className="flex flex-col justify-center">
                            <p className="text-black/80 text-sm font-bold -mb-1">Jeanette Harmon</p>
                            <p className="text-black/60 text-sm">Verified Graduate</p>
                        </div>
                    </div>
                    <p className="text-black text-xl font-bold my-5">An overall wonderful and rewarding experience.</p>
                    <p className="bg-white text-black/60 leading-5">&quot;Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.&quot; </p>
                </div>

                {/* Card 5 */}
                <div className="grid px-10 md:px-10 py-10 rounded-3xl md:col-span-2 bg-dark-blackish-blue shadow-xl">

                    <div className="w-full flex flex-row items-center justify-start">
                        <Image src={'/media/image-patrick.jpg'} width={40} height={40} alt='' className="rounded-full mr-5 border-2 border-white" />
                        <div className="flex flex-col justify-center">
                            <p className="text-white/80 text-sm font-bold -mb-1">Patrick Abrams</p>
                            <p className="text-white/60 text-sm">Verified Graduate</p>
                        </div>
                    </div>
                    <p className="text-white text-xl font-bold my-5">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy. </p>
                    <p className="bg-whitet text-white/60 leading-5">&quot;The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.&quot;</p>
                </div>
            </section>


        </>
    )
}