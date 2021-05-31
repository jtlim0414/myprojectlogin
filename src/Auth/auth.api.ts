import axios, { AxiosRequestConfig } from "axios";

export interface Credentials {
  username: string;
  password: string;
}

interface LoginApiResponse {
  
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "https://server.recipe101.tk/signin",
    data,
  };

  try {
    const { data: response } = await axios.request(requestConfig);
    console.log(response);
  } catch (e) {
    console.log(e);
    return { error: e.response.data.message };
  }
};

export interface RegisterData {
  username: string;
  password: string;
  email: string;
  phone: string;
}

export const onRegister = async (data: RegisterData) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "https://server.recipe101.tk/signup",
    data,
  };

  try {
    const { data: response } = await axios.request(requestConfig);
    console.log(response);
  } catch (e) {
    console.error(e.response);
    return { error: e.response.data.message };
  }
};


export const BOUNTCE_IT_TOKEN_KEY ="bounce_it_  "