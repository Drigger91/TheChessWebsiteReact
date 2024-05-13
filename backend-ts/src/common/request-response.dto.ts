export class ResponseSchema<T> {
    data: T;
    success: boolean;
    status: string | number;
    error?: {
        message?: string;
    };
    url: string;
}