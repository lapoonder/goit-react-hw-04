import axios from 'axios';

const YOUR_ACCESS_KEY = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com/search';

export const fetchImages = async (searchText, page) => {
  const response = await axios.get(
    `/photos/?client_id=${YOUR_ACCESS_KEY}&query=${searchText}&per_page=10&page=${page}`
  );
  return response.data;
};
