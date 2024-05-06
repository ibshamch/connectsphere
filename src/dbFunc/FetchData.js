import axios from "axios";

const FetchData = async (endpoint) => {
  const { data } = await axios.get(`http://localhost:3001/${endpoint}`);
  return data;
};

export default FetchData;
