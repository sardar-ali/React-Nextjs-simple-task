import axios from "axios";
import { API_BASE_URL } from "../../common/constant";

//login
export const login = async (data) => {
  const result = await axios.post(`${API_BASE_URL}/login/`, data);
  return result;
};

// get all news or post
export const getNews = async (access_token) => {
  const result = await axios.get(`${API_BASE_URL}/get_newsfeed/`, {
    headers: {
      Authorization: `token ${access_token}`,
    },
  });
  return result;
};

// create or add reaction like, love etc
export const createPostReaction = async (data, token) => {
  const result = await axios.post(
    `${API_BASE_URL}/create_post_reaction/`,
    data,
    {
      headers: {
        Authorization: `token ${token}`,
      },
      data,
    }
  );

  return result;
};
