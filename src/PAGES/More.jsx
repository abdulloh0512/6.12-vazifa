import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AboutCountries from "../COMPONENTS/AboutCountries";
import { filterCountryApi } from "../API/Api";

function More() {
  const { country } = useParams();
  const [countryApi, setCountryApi] = useState();
  const getApi = async () => {
    const api = await filterCountryApi(country);
    setCountryApi(api.data[0]);
  };
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="container flex flex-col mx-auto max-w-[85%] md:max-w-[90%] ">
      <Link to={"/"}>
        <button className="px-10 mb-20 py-2 flex items-center md:px-14 md:py-4 gap-1 dark:bg-[#1b263b] rounded text-inherit bg-[#f8f9fa]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>{" "}
          Back
        </button>
      </Link>
      <AboutCountries
        name={countryApi && countryApi.name.common}
        flags={countryApi && countryApi.flags.png}
        native={countryApi && countryApi.name.nativeName}
        population={countryApi && countryApi.population}
        region={countryApi && countryApi.region}
        subRegion={countryApi && countryApi.subregion}
        capital={countryApi && countryApi.capital}
        domain={countryApi && countryApi.cioc}
        pul={countryApi && countryApi.currencies}
        language={countryApi && countryApi.languages}
      />
    </div>
  );
}

export default More;
