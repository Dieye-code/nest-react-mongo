import {ExceptionFilter, ArgumentsHost, Catch, HttpException} from '@nestjs/common'

@Catch()
export default class HttpExceptionFilter implements ExceptionFilter {
    
    
    catch(exception: HttpException, host: ArgumentsHost){

        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const statusCode = exception.getStatus();
        const message = exception.message || null;

        const body = {
            statusCode,
            message,      
            timestamp: new Date().toISOString(),
            endpoint: request.url,
          };
          response.status(statusCode).json(body);

    }
    

}