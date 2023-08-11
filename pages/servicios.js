import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Link from "next/dist/client/link";
import GridComponent from "../components/GridComponent";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Servicios" />

          <section className="grid grid-cols-1 md:grid-cols-2 pb-10 font-bold bg-gradient">
            <div className="mx-6 md:mx-32 text-center text-sm md:text-lg fadeIn element py-8">
              <h2 className="text-3xl text-left pb-4">Lista de servicios</h2>

              <ul className="space-y-6 raleway">
                <ul className="text-justify space-y-4">
                  <h3 className="text-2xl pt-6 animate-bounce">
                    Algunos de nuestros servicios
                  </h3>

                  <div className="space-y-6">
                    <ul className="pl-6 space-y-6">
                      <li>
                        • Mecanizado en torno CNC por control numerico de 1OHP
                        con 350mm de volteo sobre bancada y hasta 1m de largo.{" "}
                      </li>
                      <li>
                        • Fresados CNC recorridos X 850mm Y 450mm Z 450mm.
                      </li>
                      <li>• Fresados convencionales: Fresadora universal N5</li>

                      <li>
                        • Torno convencional pesado con 500mm de volteo sobre
                        bancada y 2.20m entre puntos.
                      </li>
                      <li>• Egujereadora Roscadora. </li>
                      <li>
                        • Corte de de todo tipo de materiales hasta 200mm de
                        diametro.
                      </li>
                      <li>• Dibujo y diseño en AutoCad.</li>
                      <li>
                        • Soldaduras TIG-MIG-INVERTER para aceros inoxidables.
                        Aluminio. fundiciones y aceros de todo tipo.
                      </li>
                      <li>
                        • Instrumentos de medición:
                        <li className="pt-4"> Micrometros de 0 a 200mm </li>
                        <li>Micrometros de profundidad</li>
                        <li>Alesometros</li>
                        <li>Calibres digitales de 200mm / 300mm / 600mm</li>
                        <li>Goniometros</li>
                        <li>Comparadores y Palpadores</li>
                        <p>Todo en marca de primer nivel: Mitutoyo Japones.</p>
                      </li>
                    </ul>
                  </div>
                </ul>
              </ul>
            </div>

            <div className="mx-2 md:mx-32 mt-8 text-center fadeIn element space-y-4">

              <GridComponent name="Fresa Plana" src="/logistica.png" />

              <h2 className="text-3xl text-left pb-4">Trabajos</h2>

              <GridComponent name="Fresa Plana" src="/a1.jpg" />
              <GridComponent name="Aporte Duro" src="/a2.jpg" />
              <GridComponent name="Sustitutos" src="/a3.jpg" />

              <Link href="trabajos">
                <div className="rounded-lg p-8 text-xl my-auto btn m-8">
                  Ver más Fotos de trabajos
                </div>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
