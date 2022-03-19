export default class Result<T> {
    success: boolean;
    error: any;
    result: T | null;

    constructor(success: boolean, result: T | null, error: any) {
        this.success = success;
        this.error = error;
        this.result = result;
    }
}

export enum ThemeNameError {
    TooLong,
    NotLongEnough,
    NameAlreadyExists
}