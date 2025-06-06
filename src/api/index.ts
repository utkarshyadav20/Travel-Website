import axios from 'axios';

const API_URL = 'https://travel-website-zru2.onrender.com/api';

export const fetchDestinations = async () => {
  const response = await axios.get(`${API_URL}/destinations`);
  return response.data;
};

export const fetchTopSellingPackages = async () => {
  const response = await axios.get(`${API_URL}/packages/top-selling`);
  return response.data;
};