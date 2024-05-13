import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { ResponseSchema } from "./request-response.dto";

@Injectable()
export class RequestResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        return next.handle().pipe(
            map((data: any) => {
                const response: ResponseSchema<object> = {
                    success: true,
                    status: 'success',
                    data,
                    url: request.url,
                }
                return response;
            })
        );
    }
    
}