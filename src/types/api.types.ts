export type ApiResponse<T> =
    | { isSuccess: true; value: T }
    | { isSuccess: false; error: ApiError };

export interface ApiError {
    message: string
    code: string
}

export interface PaginationResponse<T> {
    items: T[]
    total: number
    page: number
    perPage: number
}