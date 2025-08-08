import Link from "next/dist/client/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 left-0 font-bold bg-secundary text-background w-3/5 rounded-b-3xl"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-background mb-5">
        <Link href="/" className="mr-2  mt-2 px-3 hover:border-black">
          Home
        </Link>
        <Link
          href="/quienesSomos"
          className="mr-2 mt-5 px-3 hover:border-black"
        >
          Nosotros
        </Link>
        <Link href="/servicios" className="mr-2 mt-5 px-3 hover:border-black">
          Servicios
        </Link>
        <Link href="/trabajos" className="mr-2 mt-5 px-3 hover:border-black">
          Trabajos
        </Link>

        <Link href="/Maquinaria" className="mr-2 mt-5 px-3 hover:border-black">
          Maquinaria
        </Link>

        <Link href="/contacto" className="mr-2 mt-5 px-3 hover:border-black">
          Contactanos
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
