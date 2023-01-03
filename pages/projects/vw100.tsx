import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/Header";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

export default function VW100() {
  return (
    <>
      <Head>
        <title>Projects | VW100</title>
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
          <p>VW100</p>
          <h1 className="text-5xl font-bold dark:text-white">Volkswagen</h1>
          <div className="flex justify-between">
            <div>
              <p>B-OCL-1 Planejamento e Operações Logísticas</p>
            </div>
            <div className="text-xl">
              <p>jul. de 2021 - dec. 2021</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-justify text-2xl dark:text-white">
          <p>
            Projeto desenvolvido na unidade industrial da Volkswagen de São José
            dos Pinhais, localizada na região metropolitana de Curitiba, Paraná.
          </p>
          <p>
            {" "}
            O objetivo geral deste projeto é otimizar o gerenciamento,
            rastreabilidade e controle de embalagens internas (racks metálicos)
            destinadas ao processo MAKE (Estamparia e Armação), para tal
            finalidade, foi desenvolvido uma aplicação escalável, tendo como
            foco o gerenciamento da localização de embalagens internas e
            possuindo uma estrutura capaz de entregar uma aplicação que
            corresponde aos requisitos exigidos pela empresa e que atende as
            necessidades do usuário final, além disso, foram desenvolvidas
            metodologias estratégicas para o controle físico de embalagens na
            planta, contribuindo para a melhora da segurança e orientação no
            processo logístico da fábrica.{" "}
          </p>
          <p>
            A aplicação web tem como arquitetura e hierarquia o padrão de
            projeto MVC (Model-View-Controller), possibilitando respostas
            rapidas e dinâmicas entre a interface do usuário ao banco de dados
            (MySQL), simultaneamente, foi utilizado o Google Geocoding API para
            permitir que as embalagens sejam gerenciadas e visualizadas em
            conjunto ou individualmente a partir dos dispositivos de
            geolocalização instalados na estrutura física dos racks.
          </p>
        </div>
      </main>
    </>
  );
}
