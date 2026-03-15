import { AuthApi } from '../../api/auth.api'
import {LoginRequest, RegisterRequest} from "../../types/auth.types";
import {Result} from "../../types/service.types";
import {AccessTokenStorage} from "../../storage/access-token.storage";
import {RefreshTokenStorage} from "../../storage/refresh-token.storage";

export async function login(
    credential: string,
    password: string
): Promise<Result<void>> {

    if (!credential || !password) {
        return {
            isSuccess: false,
            message: "Credential and password required"
        }
    }

    try {

        const request: LoginRequest = {
            credential,
            password
        }

        const response = await AuthApi.login(request)

        if (!response.isSuccess) {
            return {
                isSuccess: false,
                message: response.error.message
            }
        }

        await AccessTokenStorage.setAccessToken(response.value.accessToken)
        await RefreshTokenStorage.setRefreshToken(response.value.refreshToken)

        return { isSuccess: true }

    } catch (err: any) {

        return {
            isSuccess: false,
            message: err.response?.data?.message ?? err.message
        }

    }
}

export async function register(
    credential: string,
    password: string
) : Promise<Result<void>> {
    if (!credential || !password) {
        return {
            isSuccess: false,
            message: "Credential and password required"
        }
    }

    try {

        const request: RegisterRequest = {
            credential,
            password
        }

        const response = await AuthApi.register(request)

        if (!response.isSuccess) {
            return {
                isSuccess: false,
                message: response.error.message
            }
        }

        await AccessTokenStorage.setAccessToken(response.value.accessToken)
        await RefreshTokenStorage.setRefreshToken(response.value.refreshToken)

        return { isSuccess: true }

    } catch (err: any) {

        return {
            isSuccess: false,
            message: err.response?.data?.message ?? err.message
        }

    }
}