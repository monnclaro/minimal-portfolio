import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Header } from "./components/Header";

import Volkswagen from "../public/volkswagen.png";
import OBoticario from "../public/OBoticario.png";

import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { SmallProjects } from "./components/SmallProjects";

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
        <div className="mx-[450px] flex flex-col pt-64 sm:text-sm">
          <h1 className="pb-9 text-center text-8xl font-semibold tracking-normal dark:text-white">
            hi, i'm <br />
            august ❦
          </h1>
          <p className="pb-9 text-center text-2xl tracking-normal dark:text-slate-200">
            My interests are very broad but they all <br />
            diverge to understanding and solving human problems.
          </p>
          <div className="flex justify-center gap-12">
            <button className="text-md rounded-md bg-[#0070f3] py-1 px-[65px] text-white shadow-md shadow-[#0077ffbd] transition duration-300 hover:scale-95 dark:shadow-lg dark:shadow-[#0077ffa2]">
              About me
            </button>
            <button
              onClick={() => window.scrollTo(0, 815)}
              className="text-md rounded-md bg-[#0070f3] py-2 px-[65px] text-white shadow-md shadow-[#0077ffbd] transition duration-300 hover:scale-95 dark:shadow-lg dark:shadow-[#0077ffa2]"
            >
              Projects
            </button>
          </div>
        </div>

        <div className="mx-[450px] mt-[298px] flex flex-col pb-28">
          <div className="flex flex-col items-center gap-8">
            <div className="max-h-[370px] w-[1200px] rounded-md bg-white shadow-lg dark:bg-[#1d1f20]  dark:shadow-xl">
              <div className="flex flex-row items-center justify-between px-16 py-12">
                <div className="text-xl text-black dark:text-slate-200">
                  <p>VW100</p>
                  <h1 className="py-4 text-3xl font-bold dark:text-white">
                    Volkswagen
                  </h1>
                  <p className="w-[450px]">
                    Project developed at the Volkswagen industrial unit in São
                    José dos Pinhais, located in the metropolitan region of
                    Curitiba, Paraná.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/projects/vw100"
                      className="cursor-pointer font-semibold text-[#0076FF] hover:text-[#0077ffa9]"
                    >
                      Read more
                    </Link>
                    <a href="https://www.faculdadesdaindustria.org.br/parceria-com-a-volkswagen-possibilita-imersao-academica-na-industria--1-35816-460283.shtml">
                      <ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer text-[#0076FF] transition-all duration-75 ease-in hover:text-[#0077ffa9]" />
                    </a>
                  </div>
                </div>

                <div className="pr-14">
                  <Image
                    src={Volkswagen}
                    alt="Volkswagen logo"
                    width={250}
                    height={250}
                    className="drop-shadow-lg dark:brightness-200 dark:contrast-200 dark:grayscale dark:invert"
                  />
                </div>
              </div>
            </div>
            <div className="max-h-[370px] w-[1200px] rounded-md bg-white shadow-lg dark:bg-[#1d1f20] dark:shadow-xl">
              <div className="flex flex-row items-center justify-between px-16 py-12">
                <div className="text-xl text-black dark:text-slate-200">
                  <p>Boti100</p>
                  <h1 className="py-4 text-3xl font-bold dark:text-white">
                    O Boticário
                  </h1>
                  <p className="w-[450px]">
                    Project developed at the care factory of the O Boticário
                    unit in São José dos Pinhais, responsible for the production
                    of lotions and perfumes.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/projects/boti100"
                      className="cursor-pointer font-semibold text-[#0076FF] hover:text-[#0077ffa9]"
                    >
                      Read more
                    </Link>
                    <a href="https://www.faculdadesdaindustria.org.br/jornada-boti100-apresenta-solucoes-para-a-industria-1-35816-456812.shtml">
                      <ArrowTopRightOnSquareIcon className="cursor-pointeR h-6 w-6 text-[#0076FF] transition-all duration-75 ease-in hover:text-[#0077ffa9]" />
                    </a>
                  </div>
                </div>

                <div>
                  <Image
                    src={OBoticario}
                    alt="O BOticário logo"
                    width={400}
                    height={400}
                    className="drop-shadow-lg dark:invert"
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
