import Head from "next/head";
import { Inter } from "next/font/google";
import NotificationPage from "@/components/notification-page/notification-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Christian Seyboth - Frontend Developer</title>
        <meta
          name="React,Next,Tailwind,Typescript"
          content="basics practice project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className=" bg-cream background">
        <NotificationPage />
      </main>
    </>
  );
}
