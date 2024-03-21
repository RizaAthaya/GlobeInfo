import { axiosInstance } from "../coreApi";

const getAllCountries = async () => {
  try {
    const response = await axiosInstance.get("all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCountry = async (body) => {
  try {
    const response = await axiosInstance.get(
      `name/${body.search}?fullText=true`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const filterByRegion = async (body) => {
  try {
    const response = await axiosInstance.get(`region/${body.region}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const filterBySubregion = async (body) => {
  try {
    const response = await axiosInstance.get(`subregion/${body.subregion}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const searchCountries = async (body) => {
  try {
    const response = await axiosInstance.get(`name/${body.search}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getAllCountries,
  filterByRegion,
  filterBySubregion,
  searchCountries,
  getCountry,
};
