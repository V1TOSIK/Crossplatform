import { ApiResponse } from "../types/api.types";
import axios from "axios";
import {UserProfile} from "../types/profile.types";

const API_URL = 'http://192.168.0.105:8002/api/v1/users/';

export const api = axios.create({
    baseURL: API_URL,
});

export const ProfileApi = {
    getProfile: async (): Promise<ApiResponse<UserProfile>> => {
        try {
            const res = await api.get('me');
            return res.data;
        } catch (err: any) {
            if (err.response?.status === 404) {
                return { isSuccess: false, error: { message: "Profile not found", code: "NOT_FOUND" } };
            }
            return { isSuccess: false, error: { message: err.message, code: "UNKNOWN" } };
        }
    },

    updateProfile: async (profile: UserProfile): Promise<ApiResponse<UserProfile>> => {
        try {
            const res = await api.post('', profile);
            return res.data;
        } catch (err: any) {
            return { isSuccess: false, error: { message: err.message, code: "UNKNOWN" } };
        }
    },
};