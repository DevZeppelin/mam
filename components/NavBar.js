import Link from "next/dist/client/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({
  toggleNav,
  classHome,
  classQuienesSomos,
  classMaquinaria,
  classServicios,
  classTrabajos,
  classContacto,
  classCalidad,
}) => {
  return (
    <div className="flex my-0 md:py-0 justify-between px-0 bg-secundary text-white text-lg">
      <div className="hidden md:flex">
        <Link
          href="/"
          className={`px-3 hover:bg-dgreen ml-24 py-6 ${classHome}`}
        >
          Home
        </Link>
        <Link
          href="/quienesSomos"
          className={`px-3 hover:bg-dgreen py-6 ${classQuienesSomos}`}
        >
          Nosotros
        </Link>
        <Link
          href="/servicios"
          className={`px-3 hover:bg-dgreen py-6 ${classServicios}`}
        >
          Servicios
        </Link>
        <Link
          href="/trabajos"
          className={`px-3 hover:bg-dgreen py-6 ${classTrabajos}`}
        >
          Trabajos
        </Link>

        <Link
          href="/Maquinaria"
          className={`px-3 hover:bg-dgreen py-6 ${classMaquinaria}`}
        >
          Maquinaria
        </Link>

        <Link
          href="/contacto"
          className={`px-3 hover:bg-dgreen py-6 ${classContacto}`}
        >
          Contactanos
        </Link>
      </div>
      <div className="p-2 ml-2 md:hidden flex justify-start w-8 text-3xl">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div className=" flex justify-end">
        <div className="bg-dgreen w-16 md:w-56 transform skew-x-12 m-0 translate-x-12 md:translate-x-48 overflow-hidden"></div>
        <div className=" bg-dgreen w-16 md:w-56 transform  m-0 overflow-hidden"></div>
      </div>
    </div>
  );
};

/* md:hidden */

export default NavBar;
