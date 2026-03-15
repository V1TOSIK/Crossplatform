export interface ApiResult<T> {
    isSuccess: boolean
    value?: T
    error?: ApiError
}

export interface ApiResponse {
    isSuccess: boolean
    error?: ApiError
}

export interface ApiError {
    message: string
    code: number
}

export interface PaginationResult<T> {
    items: T[]
    total: number
    page: number
    perPage: number
}