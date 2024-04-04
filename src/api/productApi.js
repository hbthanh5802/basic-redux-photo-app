import axiosClient from './axiosClient';

const productApi = {};

productApi.getAll = (params) => {
  const url = '/products';
  return axiosClient.get(url, { params });
};

productApi.get = (id) => {
  const url = `/product/${id}`;
  return axiosClient.get(url);
};

export default productApi;
