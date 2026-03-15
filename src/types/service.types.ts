export interface Result<T>{
    isSuccess: boolean,
    value?: T
    message?: string
}