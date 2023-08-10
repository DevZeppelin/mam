import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import GridComponent2 from "../components/GridComponent2";

const Maquinaria = () => {
  const [visible, setVisible] = useState("hidden");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue == "mam2023") {
      setVisible("flex");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div>
      <Head>
        <title>Maquinaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classMaquinaria={"bg-dgreen"}>
        <div>
          <PageTitle text="Maquinaria" />

          <section className="mb-8">
            <div className="mx-8 md:mx-32 text-center text-sm md:text-base fadeIn element py-8">
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Torno CNC Turri
              </h2>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq1.png" />
              <p>
                Torno de origen nacional con control numérico computarizado
                FANUC japonés
              </p>
              <p>
                Posee 350 mm de volteo sobre bancada con plato de 250mm y 1.2m
                entre puntos
              </p>
              <p>Husillo 55mm. Contrapunta y platos hidráulicos programables</p>
              <p>Potencia 10HP (alta y baja)</p>
              <p>
                Esta máquina garantiza calidad y rapidéz en piezas en serie y
                además potencia para piezas de mayor tamaño.
              </p>
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Agujereadora Roscadora
              </h2>
              <p>Recorridos x650mm y 250mm z350mm</p>
              <p>Origen Taiwán con automático en eje x.</p>
              <p>
                Es una máquina chica para realizar perforados hasta 40mm y
                roscar con todo tipo de machos
              </p>
              <p>
                Es convencional y por sus características es sumamente necesaria
                por su velocidad y practicidad.
              </p>
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Fresadora CNC Sistems 850-D
              </h2>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq2.png" />
              <p>Posee recorridos de x850mm y 450mm z450mm</p>
              <p>Control fagor 8025 con gráficos</p>
              <p>PEso admitido sobre la mesa 600kg</p>
              <p>
                PC esclava para ejecutar grandes programas en tres dimensiones
              </p>
              <p>
                Origen francés con cabezal rotativo 180 grados, torpedo
                desplazable y mesa regulable en altura. Permitiendo con esto el
                mecanizado de piezas con dicersas geometrías manteniendo la
                calidad de un CNC. Esto es una característica poco común en un
                CNC que hace a la máquina muy interesante y versátil.
              </p>
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Fresadora Universal N5
              </h2>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq3.png" />
              <p>Recorridos 1000mm x 300mm x 400mm en altura</p>
              <p>Posee plato y mesa divisora</p>
              <p>Cabezal mortajador.</p>
              <p>Arbol central porta fresas</p>
              <p>Maquina pesada muy versatil para variedad de mecanizados.</p>

              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Instrumentos de medición:</h2>
              <li className="pt-4"> Micrometros de 0 a 200mm </li>
              <li>Micrometros de profundidad</li>
              <li>Alesometros</li>
              <li>Calibres digitales de 200mm / 300mm / 600mm</li>
              <li>Goniometros</li>
              <li>Comparadores y Palpadores</li>
              <p>Todo en marca de primer nivel: Mitutoyo Japones.</p>

              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Otras
              </h2>
              <p>Sensitiva industrialSierra sin fin</p>
              <p>Soldadora Tig, mig e inverter.</p>
              <p></p>
              <p>Transporte propio</p>

              <h2 className="text-3xl text-center pb-4 uppercase pt-12">
                Dibujo y diseño en Autocad
              </h2>
              <GridComponent2 name="Aporte Fresa Plana" src="/cad2.png" />
              <GridComponent2 name="Aporte Fresa Plana" src="/cad1.png" />

             
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Maquinaria;
