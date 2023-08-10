import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import GridComponent from "../components/GridComponent";

const Trabajos = () => {
  return (
    <div>
      <Head>
        <title>Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classTrabajos={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Trabajos" />

          <section className="pb-8 bg-gradient">
            <h2 className="text-3xl text-center pt-12 ">
              Algunos de nuestros trabajos
            </h2>

            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
              <GridComponent name="Aporte Fresa Plana" src="/a1.jpg" />
              <GridComponent name="Tapa Rosca Doble Selli" src="/a2.jpg" />
              <GridComponent name="Pescador Serie 150" src="/a3.jpg" />
            </div>

            <div className="p-6 md:p-32 space-y-8 text-xl">
              <p>
                Piezas mecanizadas bajo planos o muestras por nuestra PyME  en
                distintos tipos de materiales ferrosos y no ferrosos como aceros
                SAE 4140, 1045, 1010, 1020 Inoxidables 316,410,4210, 304;
                Duplex, Nitronix, Monel. Aluminios. Bronces. Cobres.Todo tipo de
                plasticos APM; UHM; UHMW; GRILLON, DELRIN, TEFLON, etc...
              </p>

              <p>
                Presupuestos de mecanizados en menos de 24hs. comunicandose a
                nuestros teléfonos ,mail o personalmente.
              </p>

              <p className="text-4xl">Industrias:</p>
              <ul className="space-y-4 flex flex-col md:grid md:grid-cols-3">
                <li>• Alimenticia</li>
                <li>• Olivicola</li>
                <li>• Vitivinicola</li>
                <li>• Aguas y Gaseosas</li>
                <li>• Petroleo</li>
                <li>• Del vidrio</li>
                <li>• Aeronautica</li>
                <li>• Neumatica</li>
                <li>• Hidraulica</li>
                <li>• Mineria</li>
                <li>• Accesorios para vidrio templado</li>
                <li>• Ortopedia</li>
                <li>• Soldaduras especiales</li>
              </ul>
            </div>

            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
              <GridComponent name="Aporte Fresa Plana" src="/0001.jpeg" />
              <GridComponent name="Tapa Rosca Doble Selli" src="/0002.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0003.jpeg" />
              <GridComponent name="Aporte Fresa Plana" src="/0004.jpeg" />
              <GridComponent name="Tapa Rosca Doble Selli" src="/0005.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0006.jpeg" />
              <GridComponent name="Aporte Fresa Plana" src="/0007.jpeg" />
              <GridComponent name="Tapa Rosca Doble Selli" src="/0008.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0009.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0010.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0011.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0012.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0013.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0014.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0015.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0016.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0017.jpeg" />
              <GridComponent name="Pescador Serie 150" src="/0018.jpeg" />
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Trabajos;
