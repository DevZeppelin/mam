import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FiMail } from "react-icons/fi";
import PageTitle from "../components/PageTitle";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classContacto={"bg-dgreen"}>
        <PageTitle text="Contactanos" />
        <div className="text-center space-y-6 pt-8">
          
          <h1 className="text-4xl font-extrabold pt-10">¡Contactanos!</h1>
          <p>
            <b>Facebook</b>: MAM Mecanizados
          </p>
          <p>
            <b>Instagram</b>: @mammecanizados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 ">
           
            <div>
              <a
                href="mailto:mam.mecanizadoscnc@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <MainBarButton
                  logo={
                    <FiMail className="text-dgreen text-6xl flex my-auto m-4" />
                  }
                  text="Correo electrónico"
                  description="mam.mecanizadoscnc@gmail.com"
                  classType="text-dgreen text-2xl my-2"
                />
              </a>
              <a
                href="mailto:munoz.mecanizadoscnc@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <MainBarButton
                  logo={
                    <FiMail className="text-dgreen text-6xl flex my-auto m-4" />
                  }
                  text="Correo electrónico"
                  description="mam.mecanizadoscnc@gmail.com"
                  classType="text-dgreen text-2xl my-2"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contacto;
