import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { ResponseSchema } from "./request-response.dto";

@Catch()
export class GlobalExceptionHandler implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : 500;
        console.error('[Global Exception Handler] Found error ', exception);
        const responseSchema: ResponseSchema<object> = {
            error: {
                message: exception.message,
            },
            success: false,
            status: httpStatus,
            data: exception?.response?.message || 'Exception Occured',
            url: request.url,
        };
        response.status(httpStatus).json(responseSchema);
    }
    
}