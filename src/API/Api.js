const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";

export const getCountriesApi = async () => {
  const response = await fetch(BASE_URL + "/countries");
  const data = response.json();

  return data;
};

export const filterRegionApi = async (region) => {
  const response = await fetch(BASE_URL + "/countries?region=" + region);
  return response.json();
};

export const filterCountryApi = async (country) => {
  const response = await fetch(BASE_URL + "/countries?search=" + country);
  return response.json();
};