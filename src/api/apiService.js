import { message } from "antd";
// import axiosServer from "./axios";
import axios from "./axios";
import {base_url} from "./baseURL"



export const getAllService = async (params) => {
  // const response = await fetch('https://service.edustar.com.vn/service/all'); 
  const response = await fetch(`${base_url}/service/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};
export const getServiceById = async (id) => {
  // const response = await fetch(`https://service.edustar.com.vn/service/${id}`); 
  const response = await fetch(`${base_url}/service/${id}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};
