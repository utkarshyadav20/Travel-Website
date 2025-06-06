import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchDestinations = async () => {
  const response = await axios.get(`${API_URL}/destinations`);
  return response.data;
};

export const fetchTopSellingPackages = async () => {
  const response = await axios.get(`${API_URL}/packages/top-selling`);
  return response.data;
};