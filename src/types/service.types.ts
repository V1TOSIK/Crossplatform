export type Result<T> =
    | { isSuccess: true; value: T }
    | { isSuccess: false; message: string };