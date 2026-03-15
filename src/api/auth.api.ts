import axios from 'axios';
import {LoginRequest, LoginResponse, RegisterRequest, RegisterResponse} from '../types/auth.types'
import {ApiResponse, ApiResult} from "../types/api.types";

const API_URL = 'http://localhost:8001/api/v1/users/';

export const AuthApi = {
    login: async (request: LoginRequest) : Promise<ApiResult<LoginResponse>> => {
        const res = await axios.post(API_URL + "login", request)
        return res.data
    },

    register: async (request: RegisterRequest) : Promise<ApiResult<RegisterResponse>> => {
        const res = await axios.post(API_URL + "register", request)
        return res.data
    },

    logout: async () : Promise<ApiResponse> => {
        const res = await axios.delete(API_URL + "logout")
        return res.data
    }
}