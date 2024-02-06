import React from "react";

function Country({ region, population, flags, name, capital }) {
  return (
    <div className="felx felx-col w-[264px] rounded-md bg-[#f8f9fa] dark:bg-[#263043] dark:text-white gap-5">
      <img className="w-full h-[160px]  rounded-t-lg" src={flags} alt="" />
      <div className="p-4">
        <h3 className="text-[#000] text-lg h-[56px] font-bold mb-6 dark:text-[#fff]">
          {name}
        </h3>
        <div className="flex flex-col gap-3">
          <span className="text-[#000] text-lg font-simebold dark:text-[#fff] ">
            Population:
            <strong className="text-slate-800 text-sm font-normal mr-2 dark:text-slate-300 ">
              {population}
            </strong>
          </span>
          <span className="text-[#000] text-lg font-simebold dark:text-[#fff]">
            Region:
            <strong className="text-slate-800 text-sm font-normal mr-3 dark:text-slate-300">
              {region}
            </strong>
          </span>
          <span className="text-[#000] text-lg font-simebold dark:text-[#fff]">
            Capital:
            <strong className="text-slate-800 text-sm font-normal mr-3 dark:text-slate-300">
              {capital}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Country;
