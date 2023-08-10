import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
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
            <b>Dirección Taller</b>: España 18 - Godoy Cruz - Mendoza
          </p>
          <p>
            <b>Dirección Oficina</b>: Barrio El Recodo Russell - Maipú - Mendoza
          </p>
          <p>
            <b>Facebook</b>: MAM Mecanizados
          </p>
          <p>
            <b>Instagram</b>: @mammecanizados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 ">
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5492615254680"
                target="_blank"
                rel="noopener"
              >
                <MainBarButton
                  logo={
                    <FaPhone className="text-dgreen text-6xl flex my-auto m-4" />
                  }
                  text="Llamadas"
                  description="2615 25 4680"
                  classType="text-dgreen text-2xl my-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5492615254680"
                target="_blank"
                rel="noopener"
              >
                <MainBarButton
                  logo={
                    <FaWhatsapp className="text-dgreen text-6xl flex my-auto m-4" />
                  }
                  text="Whatsapp Chat"
                  description="+5492615254680"
                  classType="text-dgreen text-2xl my-2"
                />
              </a>
            </div>
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
            </div>
          </div>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.504258440706!2d-68.85850724551445!3d-32.92437321982876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e097f709d39ff%3A0xf5cf97759e033faa!2sEspa%C3%B1a%2018%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1691614682342!5m2!1ses-419!2sar"
              width="100%"
              height="600"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container px-5 min-h-screen mx-auto flex"></div>
        </section>
      </Layout>
    </div>
  );
};

export default Contacto;
