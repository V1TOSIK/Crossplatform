import axios from 'axios';
import { ProductResponse} from "../types/product.types";
import {ApiResponse, PaginationResponse} from "../types/api.types";

const API_URL = 'http://localhost:8004/api/v1/products/';

export const ProductApi = {
    getProducts: async (params: any): Promise<ApiResponse<PaginationResponse<ProductResponse>>> => {
        const res = await axios.get(API_URL + 'products/');
        return res.data;
    }
}