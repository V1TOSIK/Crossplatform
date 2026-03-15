export interface LoginRequest {
    credential: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface RegisterRequest {
    credential: string;
    password: string;
}

export interface RegisterResponse {
    accessToken: string;
    refreshToken: string;
}