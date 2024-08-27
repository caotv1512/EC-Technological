import axiosClient from "./axiosClient";

export const getProductApi = async () => {
  return await axiosClient.get("/product");
};

export const getProductByIdApi = async (id) => {
  return await axiosClient.get(`/product/${id}`);
};

