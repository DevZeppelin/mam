import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import PageTitle from "../components/PageTitle";

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Nosotros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classQuienesSomos={"bg-dgreen"}>
        <section>
          <PageTitle text="Nosotros" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="text-center space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold">Nuestra empresa</h2>
              <div className="bg-dgreen w-32 h-1 mx-auto space-y-7"></div>

              <p className="font-bold">MAM Mecanizados CNC</p>
              <p>
                Contamos con los medios para prestar servicio de
                mecanizados especialmente por control númerico C.N.C.  Nuestra
                Estamos ubicados en Godoy Cruz centro, Mendoza.
              </p>
              <p>El titular: Técnico en producción industrial automatizada, con más de 25 años de experiencia en el rubro Metal Mecánico</p>
              <p>
                Nos caracterizamos por el trabajo en equipo y alto compromiso
                laboral.
              </p>
              <p>
                En nuestra PyME contamos con los medios humanos y maquinaria adecuada para la
                realización de los trabajos que ofrecemos, dando un servicio en
                las mejores condiciones de precio, calidad y cumplimientos de
                plazos de entrega.
              </p>
            </div>
            <div>
              <img
                src="/logo.png"
                alt="building icon logo Ad Service petróleo y agua"
                className="p-4 w-96 h-96"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center">
          <div className="space-y-4">
            <BiCheckShield className="mx-auto text-4xl text-dgreen" />
            <h2 className="text-2xl">Nuestra Misión</h2>
            <p>
              Nuestro principal objetivo es poder brindar un servicio óptimo en cuanto a la calidad y tiempos de entrega. Siempre buscando la mejora continua en cuanto a herramientas, capacitación y maquinaria
            </p>
            <p>Enfocados no solo en solucionar los problemas sino mejorar el funcionamiento y durabilidad de los componentes fabricados ya sea en tipo de material, tratamientos térmicos, tolerancias dimensionales, rugosidades, etc...</p>
          </div>
          <div className="space-y-4">
            <FaEye className="mx-auto text-4xl text-dgreen " />
            <h2 className="text-2xl">Nuestra Visión</h2>
            <p className="pt-8">
            Consolidar el reconocimiento en todo el país como PyME de fabricación de piezas de calidad mediante planos o muestras para la Industria Metalmecánica.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
