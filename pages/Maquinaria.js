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
            <GridComponent2 name="Aporte Fresa Plana" src="/maq1.png" />
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Torno CNC Turri</h2>
              <p>Torno de origen nacional con control numérico computarizado FANUC japonés</p>
              <p>Posee 350 mm de volteo sobre bancada con plato de 250mm y 1.2m entre puntos</p>
              <p>Husillo 55mm. Contrapunta y platos hidráulicos programables</p>
              <p>Potencia 10HP (alta y baja)</p>
              <p>Esta máquina garantiza calidad y rapidéz en piezas en serie y además potencia para piezas de mayor tamaño.</p>
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Agujereadora Roscadora</h2>
              <p>Recorridos x650mm y 250mm z350mm</p>
              <p>Origen Taiwán con automático en eje x.</p>
              <p>Es una máquina chica para realizar perforados hasta 40mm y roscar con todo tipo de machos</p>
              <p>Es convencional y por sus características es sumamente necesaria por su velocidad y practicidad.</p>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq2.png" />
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Fresadora CNC Sistems 850-D</h2>
              <p>Posee recorridos de x850mm y 450mm z450mm</p>
              <p>Control fagor 8025 con gráficos</p>
              <p>PEso admitido sobre la mesa 600kg</p>
              <p>PC esclava para ejecutar grandes programas en tres dimensiones</p>
              <p>Origen francés con cabezal rotativo 180 grados, torpedo desplazable y mesa regulable en altura. Permitiendo con esto el mecanizado de piezas con dicersas geometrías manteniendo la calidad de un CNC. Esto es una característica poco común en un CNC que hace a la máquina muy interesante y versátil.</p>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq3.png" />
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Fresadora Universal</h2>
              <p>recorridos de x800mm y 300mm z300mm</p>
              <p>Posee plato y mesa divisora</p>
              <p>Mesa giratoria 180 grados</p>
              <p>Torpedo con árbol porta fresas automáticos en sus movimientos</p>
              <p>Es una máquina mediana convencional</p>
              <GridComponent2 name="Aporte Fresa Plana" src="/maq4.png" />
              <h2 className="text-3xl text-center pb-4 uppercase pt-12">Otras</h2>
              <p>Sensitiva industrialSierra sin fin</p>
              <p>Soldadora inverter 250amp</p>
              <p>Dibujo y diseño en Autocad</p>
              <p>Transporte propio</p>


            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Maquinaria;
