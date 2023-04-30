import { IrequestTokenResponse } from "lastHomework/components/login";

const axios = require("axios");
const API_KEY = "2c2a51168da517ee7a6b21e5a0f35561";
const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

const getRequestToken = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSession = async (
  requestToken: string,
  username: string,
  password: string
) => {
  const userData = {
    username: username,
    password: password,
    request_token: requestToken,
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/authentication/session/new?api_key=2c2a51168da517ee7a6b21e5a0f35561`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const validateToken = async (
  requestToken: string,
  username: string,
  password: string
) => {
  const userData = {
    username: username,
    password: password,
    request_token: requestToken,
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAccount_id = async (sessionID: string) => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/account?api_key=2c2a51168da517ee7a6b21e5a0f35561&session_id=${sessionID}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getRequestToken, getSession };
