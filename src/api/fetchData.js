import axios from 'axios';

export const getCarsData = async (condition = null) => {
  let query = '';
  if (condition) {
    query = `/?${condition}`;
  }
  const { data } = await axios.get(`/api/cars${query}`);
  return data.payload;
};
