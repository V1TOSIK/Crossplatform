export interface LoginRequest {
    credential: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export interface RegisterRequest {
    credential: string;
    password: string;
}

export interface RegisterResponse {
    accessToken: string;
}

export interface AuthData{
    accessToken: string;
    refreshToken: string;
}