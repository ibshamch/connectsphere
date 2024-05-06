import axios from "axios";
const PostData = async (endpoint, dataToPost) => {
  const { data } = await axios.post(
    `http://localhost:3001/${endpoint}`,
    dataToPost
  );
  return data;
};

export default PostData;
