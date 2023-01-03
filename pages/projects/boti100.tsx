import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/Header";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

export default function Boti100() {
  return (
    <>
      <Head>
        <title>Projects | Boti100</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ThemeSwitcher />
      <main className="mx-[450px] mt-[70px]">
        <div className="mt-28 mb-10 flex flex-col gap-2 text-2xl text-black dark:text-slate-300">
          <Link href="/">
            <ArrowLongLeftIcon className="h-10 w-10 cursor-pointer text-black hover:text-[#0076FF] dark:text-white dark:hover:text-[#0076FF]" />
          </Link>

          <p>Boti100</p>
          <h1 className="text-5xl font-bold dark:text-white">O Boticário</h1>
          <div className="flex justify-between">
            <div>
              <p>Higienização e Abastecimento (Linha de Cuidados)</p>
            </div>
            <div className="text-xl">
              <p>jan. 2021 - jun. 2021</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-justify text-2xl dark:text-white">
          <p>
            Projeto desenvolvido na fábrica de cuidados da unidade do O
            Boticário de São José dos Pinhais, responsável pela produção de
            cremes e perfumes.
          </p>
          <p>
            O objetivo geral deste projeto é de otimizar o fluxo operacional da
            área de higienização e abastecimento de cremes da linha de produção
            de cuidados do O Boticário, identificando, idealizando e propondo
            oportunidades de melhoria nos processos, sustentabilidade,
            qualidade, redução de custos, layout, criação de KPIs e o
            estreitamento da comunicação entre turnos e áreas de interface,
            obtendo assim, um fluxo propicio para que se atinjam as metas e
            objetivos estabelecidos pela empresa.
          </p>
          <p>
            A área em questão é responsável por abastecer as linhas de envase
            por meio de tanques de armazenagem de granel e garantir a
            higienização dos utensílios, máquinas e tubulações utilizadas nos
            processos de fabricação e abastecimento, sendo um fator de grande
            impacto nos níveis de contaminação das áreas envolvidas e no setup
            de produção e envase.
          </p>
        </div>
      </main>
    </>
  );
}
