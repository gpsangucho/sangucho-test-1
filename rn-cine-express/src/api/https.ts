import axios from "axios";

export const http = axios.create({
  //baseURL: "https://higuera-billing-api.desarrollo-software.xyz/api",
  baseURL: "https://api.tvmaze.com/search/shows?q=batman",
  timeout: 15000,
});