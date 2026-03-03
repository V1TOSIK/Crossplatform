export interface Product {
  id: string;
  userId: string;
  name: string;
  priceAmount: number;
  priceCurrency: string;
  description: string;
  categoryId: number;
  location: string;
  status: string;
  createdAt: string;
}

export interface CreateProductDto {
  name: string;
  priceAmount: number;
  priceCurrency: string;
  description: string;
  location: string;
  categoryId: number;
}