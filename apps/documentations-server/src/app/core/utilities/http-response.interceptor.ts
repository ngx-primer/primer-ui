import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, lastValueFrom } from 'rxjs';
import { failureResponse, successResponse } from './http-response.utils';

@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<T> {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<unknown>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();

    try {
      const data = await lastValueFrom(next.handle());
      
      // Set success status code
      response.status(200);

      return new Observable((observer) => {
        observer.next(successResponse('Request success', data || null)); // Ensure null is handled
        observer.complete();
      });
    } catch (error) {
      // Extract error status or fallback to 500
      const statusCode = error.status || 500;

      // Set error status code
      response.status(statusCode);

      return new Observable((observer) => {
        observer.next(
          failureResponse(
            'Request failed',
            error.response || error.message || error,
          ),
        );
        observer.complete();
      });
    }
  }
}
