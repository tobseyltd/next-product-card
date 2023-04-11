import { Grid, Tooltip } from "@nextui-org/react"
import Image from "next/image"



export default function Home(): JSX.Element {
    return (
        <>
        <div className='h-screen md:w-8/12 flex flex-col md:flex-row justify-center items-center'>
          <div className='snap-start flex flex-col w-10/12'>

            <h1 className='text-5xl text-black mr-10'>Christian Seyboth</h1>
            <p className='text-black/60 text-xl'>Frontend Developer | Berlin, Germany</p>
            <p className='text-3xl text-black/60 mt-5 font-thin'>I’m a software engineer specializing in building (and occasionally designing) exceptional 
                websites & online shops. Currently, I’m focused on learning React, Next, Tailwind & Typescript</p>

            <div className="flex pt-8 2xl:w-4/6 items-center">
              <p className="mr-5 font-bold">Codewars:</p>

              <Tooltip content={"Find me on Codewars"}>
                <a href='https://www.codewars.com/users/tobsey/'><img src='https://www.codewars.com/users/tobsey/badges/large' /></a>
              </Tooltip>
            </div>
          </div>
          <div className='rounded-full skew-y-12 w-7/12 pl-10'>
            <Image
              src='/media/web-development.svg'
              width={400}
              height={400}
              alt=''
            />
          </div>


        </div>

        <section className='w-screen h-screen background flex justify-center bg-cover'>
          <div className='h-screen flex flex-col justify-center items-center w-7/12'>

            <h2 className='text-5xl font-semibold pb-2 underline underline-offset-8'>Skills & Experience</h2>
            <p className='text-xl text-blacK/80'>The main area of expertise is frontend development (client side of the web).</p>
            <p className='box text-xl text-black/80 pt-5 text-center mb-8 w-9/12'>HTML, CSS, JS, building small and medium web applications mostly with Wordpress, Html, Css & Javascript.
              I have also <b>team-lead experience and a strong analytical competence</b>. I love being creative in the way to solve and master my work and challenges. Working in a team with lots of different
              personalities is preferred</p>

            <Grid.Container className='scroll' alignItems='center' justify='space-evenly' gap={2}>
              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/html5.svg"
                  width={75}
                  height={75}
                  alt="Typescript"
                />
                <p>HTML</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/css.svg"
                  width={63}
                  height={63}
                  alt="Typescript"
                  className='pt-1'
                />
                <p className='pt-1'>CSS</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/tailwind-css.svg"
                  width={70}
                  height={70}
                  alt="Typescript"
                  className='-mt-2'
                />
                <p>Tailwind</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/javascript.svg"
                  width={80}
                  height={80}
                  alt="Typescript"
                  className='-mt-2'
                />
                <p>Javascript</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/typescript.svg"
                  width={80}
                  height={80}
                  alt="Typescript"
                  className='-mt-2'
                />
                <p>Typescript</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/wordpress-logo.svg"
                  width={60}
                  height={60}
                  alt="Typescript"
                />
                <p>Wordpress</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/react.svg"
                  width={62}
                  height={62}
                  alt="Typescript"
                />
                <p>React.JS</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/next.svg"
                  width={70}
                  height={70}
                  alt="Typescript"
                />
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/git.svg"
                  width={62}
                  height={62}
                  alt="Typescript"
                />
                <p>GIT</p>
              </Grid>

              <Grid direction='column' alignItems='center' justify='center' xs={5} md={2.2}>
                <Image
                  src="/media/github.svg"
                  width={62}
                  height={62}
                  alt="Typescript"
                />
                <p>GitHub</p>
              </Grid>
            </Grid.Container>
          </div>
        </section>

        <div className='h-screen flex flex-col justify-center items-center transition-all'>
          <p className='text-7xl font-extrabold'>Work</p>
        </div>

        <div className='h-screen flex flex-col justify-center items-center'>
          <p className='text-7xl font-extrabold'>Contact</p>
        </div>
        </>
    )
}