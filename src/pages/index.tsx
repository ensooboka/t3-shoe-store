import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import styles from '../styles/Home.module.css'
import Link from "next/link";



const Home: NextPage = () => {
  const { data: shoes, isLoading } = trpc.useQuery(["shoe.findAll"]);

  if(isLoading || !shoes) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Shuez By Cody</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">

      <nav className="p-3 rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap place-content-center lg:place-content-end lg:pr-16 items-center mx-auto">
            <Link href="/" prefetch={false}>
              <a className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Shuez By Cody </span>
                <img src="https://flowbite.com/docs/images/logo.svg" className="pl-1 mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
              </a>
            </Link>
            </div>
        </nav>

        <section className="text-gray-600 body-font pt-2">
          <div className="rounded border border-gray-200 px-8 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-8">
              <h2 className="text-sm text-blue-800 tracking-widest font-bold mb-1">FALL SHUE COLLECTION</h2>
              <h1 className="text-3xl font-medium text-gray-600">tootzie popz</h1>
            </div>
          </div>
        </section>
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
            {shoes.map(shoe => 
              <div key={shoe.id} className="p-4 rounded-md flex items-center justify-center">
                <a className="h-full" href={`/sneakz/${shoe.styleColor}`}><img className="mx-auto rounded-lg max-w-sm lg:max-w-xs h-full object-cover" src={shoe.image} alt="user avatar" loading="lazy" /></a>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};



export default Home;
