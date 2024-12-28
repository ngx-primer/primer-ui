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
    try {
      const data = await lastValueFrom(next.handle());
      if (data) {
        return new Observable((observer) => {
          observer.next(successResponse('Request success', data));
          observer.complete();
        });
      }
      return new Observable((observer) => {
        observer.next(successResponse('Request success', null)); // Handle empty or null data
        observer.complete();
      });
    } catch (error) {
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
