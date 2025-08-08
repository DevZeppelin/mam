import Head from "next/head";
import Link from "next/link";
import NextLink from "next/link";
/* import Link from "next/dist/client/link"; */

import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRecycle, FaUserCog } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import GridComponent from "../components/GridComponent";

import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: sectionGrid, inView: SectionGridVisible } = useInView();
  const { ref: cartelFixed, inView: CartelFixedVisible } = useInView();
  const { ref: elegirnos, inView: elegirnosVisible } = useInView();

  return (
    <div>
      <Head>
        <title>MAM Mecanizados CNC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="mam mecanizados cnc, mam, mecanizados, cnc, metalurgica, industria, servicios industriales, mendoza, maipú, godoy cruz, argentina, industria, fabricacion, autocad"
        />
        <meta
          name="keywords"
          content="mam mecanizados cnc, mam, mecanizados, cnc, metalurgica, industria, servicios industriales, mendoza, maipú, godoy cruz, argentina, industria, fabricacion, autocad"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-dgreen"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-darkGray">
            <h1 className="font-bold text-2xl tracking-wider text-lgreen">
              MAM MECANIZADOS CNC
            </h1>
            <p className="text-white">
              Titular: Técnico Universitario en Producción Industrial
              Automatizada, con mas de 28 años de experiencia en el rubro metal
              mecánico
            </p>
          </div>
        </section>
        <section
          ref={sectionGrid}
          className={SectionGridVisible ? "animate-appear" : ""}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6 md:m-24 text-center fadeIn element">
            <div className="my-auto font-bold flex">
              <div className="w-3 h-32 bg-dgreen my-auto"></div>
              <div className="text-lg m-6">
                <p>Presupuestos de mecanizados en menos de 24hs.</p>
                <p> Comunicate a nuestros teléfonos, mail o personalmente.</p>
                <p className="pt-4 text-red-700">¡Estamos a tu servicio!</p>
              </div>
            </div>
            <GridComponent
              name="REPARACION DE CONEXIONES API Y ESPECIALES"
              src="0001.jpeg"
            />
            <GridComponent
              name="APORTE DURO EN FRESAS Y ZAPATOS"
              src="0002.jpeg"
            />
            <GridComponent
              name="RECTIFICADO DE FRESAS, ZAPATOS, ESTABILIZADORES"
              src="0003.jpeg"
            />
            <GridComponent
              name="FABRICACION DE HERAMIENTAS ▶"
              src="0004.jpeg"
            />
            <GridComponent
              name="Elevadores, Reducciones, Fresas, Estabilizadores."
              src="0005.jpeg"
            />
            <GridComponent name="MECANIZADO GENERAL" src="0006.jpeg" />
            <GridComponent
              name="GRANALLADO CON MICROESFERAS DE VIDRIO"
              src="0007.jpeg"
            />
            <GridComponent
              name="MANTENIMIENTO DE EQUIPOS DE BOMBEO"
              src="0008.jpeg"
            />
            <GridComponent name="LOGISTICA" src="0010.jpeg" />
            <GridComponent
              name="SERVICIO DE CONTROL DE CALIDAD PARA EMPRESAS"
              src="logistica.png"
            />
            <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
              <h2 className="font-bold text-xl">
                Más sobre nuestros servicios
              </h2>
              <p>Para ver una lista completa de nuestros servicio entrá acá:</p>
              <NextLink href="/servicios">
                <button className="btn">Servicios</button>
              </NextLink>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-clip-border md:bg-cover bg-hero2 bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div
              ref={cartelFixed}
              className={`${
                CartelFixedVisible ? "animate-down" : ""
              } space-y-6 text-white bg-slate-800 bg-opacity-70 p-12 rounded-2xl`}
            >
              <h2 className="text-3xl fadeIn pb-4">
                Diseños y dibujos en Autocad
              </h2>

              <span className="text-base font-thin">
                <p>Diseñamos y maquetamos nuestras propias fabricaciones.</p>{" "}
                <p className="pt-6">
                  En MAM MECANIZADOS CNC buscamos siempre la excelencia en
                  nuestros trabajos, comprometidos al máximo con el cliente.
                </p>
              </span>

              <Link href="/contacto">
                <button className="btn uppercase">
                  Reservá una visita con nosotros
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold py-12">¿Por qué elegirnos?</h2>
            <div
              ref={elegirnos}
              className={`${
                elegirnosVisible ? "animate-down" : ""
              } grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16`}
            >
              <div className="space-y-8 pb-6">
                <BsFillPersonCheckFill className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">
                  Valoración de los recursos humanos
                </h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaRecycle className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Cuidado del medio ambiente</h3>
                <p>
                  Nuestras actividades cumplen con la legislación aplicable y
                  pertinente en materia de calidad, medio ambiente, seguridad y
                  salud.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <AiOutlineStar className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Excelencia de nuestros servicios</h3>
                <p>
                  Buscamos y perseguimos la excelencia del servicio prestado a
                  través de los principios de transparencia, honestidad y
                  responsabilidad.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaUserCog className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Profesionales capacitados</h3>
                <p>
                  Brindamos la eficiencia y calidad exigida por el cliente,
                  demostrando la capacidad de llevar de manera idónea los
                  proyectos asignados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section name="hero 3">
          <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-contain md:bg-cover bg-hero3 bg-fixed grid grid-cols-1 md:grid-cols-2 h-96"></div>
        </section>
      </Layout>
    </div>
  );
}
