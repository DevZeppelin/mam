import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";


const TopLeyend = () => {
  return (
    <div className="flex justify-center md:justify-between py-1 text-bluemam md:bg-lightGray">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-extrabold tracking-widest my-auto uppercase">
        España 18. Godoy Cruz. Mendoza.
        </p>
      </div>
      <div>
        <div className="text-2xl space-x-3 pr-6">
              
          
        <a
                  href="https://api.whatsapp.com/send?phone=5492615254680"
                  target="_blank"
                  rel="noreferrer"
                >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiPhoneCall  className="hover:text-dgreen" />
            </button>
          </a>
          <a
                  href="https://api.whatsapp.com/send?phone=5492615254680"
                  target="_blank"
                  rel="noreferrer"
                >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FaWhatsapp  className="hover:text-dgreen" />
            </button>
          </a>
          <a
            href="mailto:mam.mecanizadoscnc@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-dgreen" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100027589557303"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <AiOutlineFacebook className="hover:text-dgreen" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/mammecanizados/"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to instagram" alt="gmail-logo">
              <AiOutlineInstagram className="hover:text-dgreen" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
