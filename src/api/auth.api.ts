import axios, { AxiosHeaders } from 'axios';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, AuthData } from '../types/auth.types'
import { ApiResponse } from "../types/api.types";
import { AccessTokenStorage } from '../storage/access-token.storage';

const API_URL = 'http://192.168.0.105:8001/api/v1/auth/';

export const api = axios.create({
    baseURL: API_URL,
});
api.interceptors.request.use(async (config) => {
    const token = await AccessTokenStorage.getAccessToken();
    if (token) {
        if (!(config.headers instanceof AxiosHeaders)) {
            config.headers = new AxiosHeaders(config.headers);
        }
        config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
});

export const AuthApi = {
    login: async (request: LoginRequest): Promise<ApiResponse<AuthData>> => {
        const res = await api.post("login", request, {
            headers: { 'X-Platform-Type': 'mobile' }
        });

        const refreshToken: string = res.headers['x-refresh-token'];
        const resData: ApiResponse<LoginResponse> = res.data;

        if (resData.isSuccess == false) {
            return { isSuccess: false, error: resData.error };
        }

        return {
            isSuccess: true,
            value: {
                accessToken: resData.value.accessToken,
                refreshToken
            }
        };
    },

    register: async (request: RegisterRequest): Promise<ApiResponse<AuthData>> => {
        const res = await api.post("register", request, {
            headers: { 'X-Platform-Type': 'mobile' }
        });

        const refreshToken: string = res.headers['x-refresh-token'];
        const resData: ApiResponse<RegisterResponse> = res.data;

        if (resData.isSuccess == false) {
            return { isSuccess: false, error: resData.error };
        }

        return {
            isSuccess: true,
            value: {
                accessToken: resData.value.accessToken,
                refreshToken
            }
        };
    },

    logout: async (): Promise<ApiResponse<null>> => {
        const res = await api.delete("logout"); // теж через інстанс
        return res.data;
    }
};