import React from "react";

const PageTitle = ({text}) => {
  return (
    <div className="bg-hero bg-cover text-center py-28">
      <h1 className="text-4xl md:text-6xl font-bold text-white bg-slate-600 rounded-lg mx-0 md:mx-64 py-8 bg-opacity-50">
        {text}
      </h1>
    </div>
  );
};

export default PageTitle;
