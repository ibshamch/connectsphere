import axios from "axios";

const PutData = async (endpoint, id, dataToReplace) => {
  const { data } = await axios.put(
    `http://localhost:3001/${endpoint}/${id}`,
    dataToReplace
  );
  return data;
};

export default PutData;
