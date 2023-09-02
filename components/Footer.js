import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Link from "next/dist/client/link";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-darkGray text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <div className="block">
            <Link href="/">
              <a href="">
                <img
                  src="/logo.png"
                  alt="building icon logo Ad Service petróleo y agua"
                  height="200"
                  width="200"
                  className="mx-auto"
                />
                <p className="text-lgreen text-xl mt-4 font-bold text-center">
                  Mecanizados
                </p>
              </a>
            </Link>
          </div>
        </div>

        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>

          {/* <a
            href="https://api.whatsapp.com/send?phone=5492615254680"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FiPhoneCall className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Llamadas"
              description="2615-254680"
              classType=""
            />
          </a> */}

          {/* <a
            href="https://api.whatsapp.com/send?phone=5492615254680"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Whatsapp Chat"
              description="+5492615254680"
              classType=""
            />
          </a> */}
          <a href="mailto:mam.mecanizadoscnc@gmail.com" target="_blank" rel="noopener">
            <MainBarButton
              logo={
                <FiMail className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Correo electrónico"
              description="mam.mecanizadoscnc@gmail.com"
              classType=""
            />
          </a>
          <a href="mailto:munoz.mecanizadoscnc@gmail.com" target="_blank" rel="noopener">
            <MainBarButton
              logo={
                <FiMail className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Correo electrónico"
              description="munoz.mecanizadoscnc@gmail.com"
              classType=""
            />
          </a>
          
          <h1 className="pb-4">¡Seguinos en nuestras redes!</h1>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100027589557303"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="send me a mail" alt="gmail-logo">
                <AiOutlineFacebook className="text-lgreen text-6xl flex my-auto m-2" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/mammecanizados/"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="go to instagram" alt="gmail-logo">
                <AiOutlineInstagram className="text-lgreen text-6xl flex my-auto m-2" />
              </button>
            </a>
          </div>

        </div>
      </div>
      <div className="p-4 text-sm bg-black">
        Make with &#128153; in Mendoza, Argentina, by{" "}
        <a href="https://devzeppelin.ar" target="_blank" rel="noopener">
          DevZeppelin
        </a>
        . All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
