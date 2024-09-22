import { getDocument } from "pdfjs-dist";

const API_CONFIG = {
  signup: "/user/",
  login: "/login",

  createChat : "/chat/create",
  addDoctor: "/doctor/add",
  getDoctor: "/doctor",
  getDoctors: "/doctor/get",
  getChatHistory : "/chat/get",
  getHistory: "/query/history",
  chat: "/query/message"
};

export default API_CONFIG;
