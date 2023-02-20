import axios from "axios";
const BASEURL = "https://assignment-1-fc7lwmf3uq-el.a.run.app";

// only for get
export const apiCall = (route) => {
  async function axiosGetCall() {
    const client = axios.create({
      baseURL: BASEURL,
    });

    const response = await client.get(route);
    return response.data;
  }
  const response = axiosGetCall();
  return response;
};
