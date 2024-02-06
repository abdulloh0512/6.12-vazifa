import React, { useEffect, useRef, useState } from "react";
import { filterCountryApi, filterRegionApi, getCountriesApi } from "../API/Api";
import Country from "../COMPONENTS/Country";
import { Link, useNavigation } from "react-router-dom";

function Home() {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [currentCountry, setCurrentCountry] = useState();
  const Countries = async () => {
    const currentCountryApi = await getCountriesApi();
    setCurrentCountry(currentCountryApi.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const FilterRegion = async (Region) => {
    const filterReg = await filterRegionApi(Region);
    setCurrentCountry(filterReg.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const FilterCountry = async (country) => {
    const filterCoun = await filterCountryApi(country);
    setCurrentCountry(filterCoun.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const inpRef = useRef();
  const searchCountry = (e) => {
    e.preventDefault();
    const inp = inpRef.current.value;
    FilterCountry(inp);
  };
  return (
    <div className="container mx-auto max-w-full md:max-w-full dark:bg-[#1b263b] ">
      <form onSubmit={searchCountry} className="relative pt-6">
        <input
          ref={inpRef}
          type="text"
          className="px-10 py-5 mb-14 rounded dark:bg-[#263043] shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] dark:shadow-[rgba(27,_38,_59,_0.2)_0px_7px_29px_0px] text-lg mx-5 pr-24 pl-16   bg-[#f8f9fa]  max-w-[360px] md:max-w-[500px]"
          name=""
          placeholder="Search for a country.."
          id=""
        />
        <img
          className="absolute left-9 w-[26px] top-6 "
          src="/search.svg"
          alt=""
        />
      </form>
      <details className="dropdown mb-8 md:mb-14 right-0">
        <summary className="m-1 btn border hover:bg-slate-50 dark:bg-[#263043] dark:text-white border-none ml-5 btn-lg px-14 text-inherit text-sm font-sm bg-[#f8f9fa]">
          Filter by Region
        </summary>
        <ul className="p-4 pr-12 ml-4 flex flex-col md:w-[200px] md:text-[16px] gap-2 shadow menu dark:bg-[#263043] bg-[#f8f9fa] dropdown-content z-[1] max-w-[270px]   rounded-box ">
          {regions.map((region, i) => (
            <li
              className="cursor-pointer dark:text-white"
              key={i}
              onClick={() => {
                FilterRegion(region);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      </details>
      <div className="flex flex-col  mx-auto  gap-10  bg-inherit  flex-wrap max-w-[264px] md:max-w-[87%]  md:gap-20 md:flex-row  md:max-full   ">
        {currentCountry ? (
          currentCountry.map((country) => (
            <Link to={"country/" + country.name.common}>
              <Country
                key={country.id}
                name={country.name.common}
                flags={country.flags.png}
                capital={country.capital}
                region={country.region}
                population={country.population}
              />
            </Link>
          ))
        ) : (
          <div class="flex mx-auto mt-4 h-screen">
            <div class="relative">
              <span className="loading dark:bg-white loading-dots loading-lg"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
