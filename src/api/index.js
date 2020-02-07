import axios from "axios";

let apiURL = "hhttps://api.zzz.studio/api/me/";

const baseAPI = axios.create({
  baseURL: apiURL
});

export const api = {
  getToday: async () => {
    let res = await baseAPI.get(
      "https://api.zzz.studio/api/me/trend?country=ko"
    );

    return res.data;
  },
  getDetail: async hashCode => {
    let res = await baseAPI.get(`https://api.zzz.studio/api/me/${hashCode}`);
    return res.data;
  }
};
