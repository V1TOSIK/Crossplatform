import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/products.api';

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
};