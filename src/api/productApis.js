import axiosClient from "./axiosClient";

export const getProductApi = async () => {
    return await axiosClient.get("/product");
  };