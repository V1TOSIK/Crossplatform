import { api } from '../../../shared/api/api';
import { Product, CreateProductDto } from '../types';

export const getProducts = async (params?: any) => {
  const { data } = await api.get('/products', { params });
  return data;
};

export const getProductById = async (productId: string) => {
  const { data } = await api.get(`/products/${productId}`);
  return data as Product;
};

export const createProduct = async (dto: CreateProductDto) => {
  const { data } = await api.post('/products', dto);
  return data;
};

export const deleteProduct = async (productId: string) => {
  await api.delete(`/products/${productId}`);
};

export const publishProduct = async (productId: string) => {
  await api.patch(`/products/${productId}/publish`);
};