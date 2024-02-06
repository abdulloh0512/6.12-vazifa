import React from "react";

function AboutCountries({
  name,
  flag,
  native,
  population,
  region,
  subRegion,
  capital,
  domain,
  money,
  language,
}) {
  return (
    <div className="felx eror flex-col max-w-full md:flex-row">
      {flag ? (
        <img
          className="h-[229px] md:h-[430px] md:w-[590px] inline-block w-[320px] rounded-lg mb-12"
          src={flag}
          alt=""
        />
      ) : (
        <div className="skeleton h-[229px] md:h-[430px] md:w-[590px] w-[320px]"></div>
      )}
      <div className="felx flex-row max-w-[400px]">
        <h1 className="text-xl inline-block font-bold mb-8">{name}</h1>
        <div className="flex-col flex md:flex-row gap-10">
          <div className="text-sm flex flex-col mb-12 gap-3">
            <span className=" text-[19px] font-simebold">
              Native Name:{" "}
              <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                {native}
              </span>
            </span>
            <span className=" text-[19px] font-simebold">
              Population :{" "}
              <span className="font-sm text-[16px] ml-2 text-slate-800 dark:text-slate-300">
                {population}
              </span>
            </span>
            <span className=" text-[19px] font-simebold ">
              Region :{"  "}
              <span className="font-sm text-[17px] ml-2 text-slate-800 dark:text-slate-300">
                {region}
              </span>
            </span>
            <span className=" text-[19px] font-simebold">
              Sub Region:
              <span className="font-sm text-[15px] ml-2  text-slate-800 dark:text-slate-300">
                {subRegion}
              </span>
            </span>
            <span className=" text-[19px] font-simebold">
              Capital:
              <span className="font-sm text-[15px] ml-2  text-slate-800 dark:text-slate-300">
                {capital}
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className=" text-[19px] font-simebold">
              Top Level Domain:
              <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                {domain}
              </span>
            </span>
            <span className=" text-[19px] font-simebold">
              Currencies:
              <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                {money}
              </span>
            </span>
            <span className=" text-[19px] font-simebold ">
              Languages:
              <span className="font-sm text-[15px] ml-2 text-slate-800 felx gap-1  dark:text-slate-300">
                {language}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCountries;
