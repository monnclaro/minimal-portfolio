import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Header } from "./components/Header";
import { SmallProjects } from "./components/SmallProjects";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import Volkswagen from "../public/volkswagen.png";
import OBoticario from "../public/OBoticario.png";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Augusto Monclaro | Portfolio</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ThemeSwitcher />

      <main>
        <div className="mx-[50px] flex flex-col pt-48 lg:mx-[450px] lg:pt-64 ">
          <h1 className="pb-9 text-center text-6xl font-semibold tracking-normal dark:text-white lg:text-8xl">
            hi, i'm <br />
            august ❦
          </h1>
          <p className="text-md pb-9 text-center tracking-normal dark:text-slate-200 lg:text-2xl">
            My interests are very broad but they all <br />
            diverge to understanding and solving human problems.
          </p>
          <div className="flex justify-center gap-12">
            <button className="rounded-md bg-[#0070f3] py-1 px-4 text-sm font-semibold text-white shadow-md shadow-[#0077ffbd] transition duration-300 hover:scale-95 dark:shadow-lg dark:shadow-[#0077ffa2] lg:px-[65px] lg:text-base">
              About me
            </button>
            <button
              onClick={() => window.scrollTo(0, 815)}
              className="rounded-md bg-[#0070f3] py-2 px-4 text-sm font-semibold text-white shadow-md shadow-[#0077ffbd] transition duration-300 hover:scale-95 dark:shadow-lg dark:shadow-[#0077ffa2] lg:px-[65px] lg:text-base"
            >
              Projects
            </button>
          </div>
        </div>

        <div className="mt-[298px] flex flex-col pb-28 lg:mx-[450px]">
          <div className="flex flex-col items-center gap-8">
            <div className="w-[350px] rounded-md border border-slate-200 bg-white shadow-lg dark:border-none  dark:bg-[#1d1f20] dark:shadow-xl lg:max-h-[370px] lg:w-[1200px]">
              <div className="flex flex-col items-center justify-between px-6 py-12 text-start lg:flex-row lg:px-16">
                <div className="text-md text-black dark:text-slate-200 lg:text-xl">
                  <p>VW100</p>
                  <h1 className="py-4 text-3xl font-bold dark:text-white">
                    Volkswagen
                  </h1>
                  <p className="lg:w-[450px]">
                    Project developed at the Volkswagen industrial unit in São
                    José dos Pinhais, located in the metropolitan region of
                    Curitiba, Paraná.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/projects/vw100"
                      className="cursor-pointer font-semibold text-[#0076FF] hover:text-[#0077ffd0] dark:text-[#90b3f4] dark:hover:text-[#90b3f4e0]"
                    >
                      Read more
                    </Link>
                    <a href="https://www.faculdadesdaindustria.org.br/parceria-com-a-volkswagen-possibilita-imersao-academica-na-industria--1-35816-460283.shtml">
                      <ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer text-[#0076FF] transition-all duration-75 ease-in hover:text-[#0077ffd0] dark:text-[#90b3f4] dark:hover:text-[#90b3f4e0]" />
                    </a>
                  </div>
                </div>

                <div className=" lg:pr-14">
                  <Image
                    src={Volkswagen}
                    alt="Volkswagen logo"
                    width={250}
                    height={250}
                    className="pt-10 drop-shadow-lg dark:brightness-200 dark:contrast-200 dark:grayscale dark:invert lg:pt-0"
                  />
                </div>
              </div>
            </div>
            <div className="w-[350px] rounded-md border border-slate-200 bg-white shadow-lg dark:border-none  dark:bg-[#1d1f20] dark:shadow-xl lg:max-h-[370px] lg:w-[1200px]">
              <div className="flex flex-col items-center justify-between px-6 py-12 text-start lg:flex-row lg:px-16">
                <div className="text-md text-black dark:text-slate-200 lg:text-xl">
                  <p>Boti100</p>
                  <h1 className="py-4 text-3xl font-bold dark:text-white">
                    O Boticário
                  </h1>
                  <p className="lg:w-[450px]">
                    Project developed at the care factory of the O Boticário
                    unit in São José dos Pinhais, responsible for the production
                    of lotions and perfumes.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/projects/boti100"
                      className="cursor-pointer font-semibold text-[#0076FF] hover:text-[#0077ffd0] dark:text-[#90b3f4] dark:hover:text-[#90b3f4e0]"
                    >
                      Read more
                    </Link>
                    <a href="https://www.faculdadesdaindustria.org.br/jornada-boti100-apresenta-solucoes-para-a-industria-1-35816-456812.shtml">
                      <ArrowTopRightOnSquareIcon className="cursor-pointeR h-6 w-6 text-[#0076FF] transition-all duration-75 ease-in hover:text-[#0077ffd0] dark:text-[#90b3f4] dark:hover:text-[#90b3f4e0]" />
                    </a>
                  </div>
                </div>

                <div>
                  <Image
                    src={OBoticario}
                    alt="O BOticário logo"
                    width={400}
                    height={400}
                    className="pt-10 drop-shadow-lg dark:invert lg:pt-0"
                  />
                </div>
              </div>
            </div>

            <SmallProjects />
          </div>
        </div>
      </main>
    </>
  );
}
