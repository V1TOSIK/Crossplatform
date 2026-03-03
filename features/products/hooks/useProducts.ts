import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products.api';

export const useProducts = (params?: any) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
  });
};