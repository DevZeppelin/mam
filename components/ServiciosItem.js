import { FaTools } from "react-icons/fa";

const ServiciosItem = ({title, text}) => {
  return (
    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
        <FaTools className="mx-auto text-3xl text-dgreen" />
      </div>
      <h2 className="service-h2">{title}</h2>
      <p className="leading-relaxed text-base">
       {text}
      </p>
    </div>
  );
};

export default ServiciosItem;
