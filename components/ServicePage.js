import Head from "next/head";
import Layout from "./Layout";
import { useRouter } from "next/router";

const ServicePage = ({ title, src, text0, text1, text2, text3, text4, src2, title2 }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="text-center space-y-12 py-12">
            <h2 className="text-3xl text-dgreen font-extrabold">{title}</h2>
            <img src={src} alt={title} className="mx-auto border-2 border-black rounded-xl w-80" />
            <div className="mx-4 md:mx-72 space-y-8 text-lg">
              <p className="font-bold">{text0}</p>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
            {text4 ? <div>
              <h2 className="text-2xl mt-12 mb-4 text-dgreen font-extrabold">{title2}</h2>
            <img src={src2} alt={title2} className="mx-auto border-2 w-80 border-black rounded-xl" />
            </div> : null}

            </div>

            <button className="btn" onClick={() => router.back()}>
              Atrás
            </button>
        </div>
      </Layout>
    </div>
  );
};

export default ServicePage;
