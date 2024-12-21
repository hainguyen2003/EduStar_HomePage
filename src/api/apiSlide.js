import { message } from "antd";
import axios from "./axios";
import {base_url} from "./baseURL"
// const base_url = "http://localhost:8080/"

export const getAllSlide = async () => {

  // const response = await fetch('https://service.edustar.com.vn/slide/all'); 
  const response = await fetch(`${base_url}/slide/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};

export const getSlideById = async (id) => {
  // const response = await fetch(`https://service.edustar.com.vn/slide/${id}`); 
  const response = await fetch(`${base_url}/slide/${id}`); 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
  
};

