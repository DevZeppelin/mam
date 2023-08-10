import Link from "next/dist/client/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 left-0 font-bold bg-secundary text-background w-3/5 rounded-b-3xl"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-background mb-5">
        <Link href="/">
          <a className="mr-2  mt-2 px-3 hover:border-black">Home</a>
        </Link>
        <Link href="/quienesSomos">
          <a className="mr-2 mt-5 px-3 hover:border-black">Nosotros</a>
        </Link>
        <Link href="/servicios">
          <a className="mr-2 mt-5 px-3 hover:border-black">Servicios</a>
        </Link>        
        <Link href="/trabajos">
          <a className="mr-2 mt-5 px-3 hover:border-black">Trabajos</a>
        </Link>        
            
        <Link href="/Maquinaria">
          <a className="mr-2 mt-5 px-3 hover:border-black">Maquinaria</a>
        </Link>        

        <Link href="/contacto">
          <a className="mr-2 mt-5 px-3 hover:border-black">Contactanos</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
