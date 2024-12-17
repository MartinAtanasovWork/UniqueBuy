import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith("/api")) {
        req = req.clone({
            url: req.url.replace("/api", environment.API_URL)
        })
    }
    if (req.method == "POST" || req.method == "PUT") {
        req = req.clone({
            setHeaders: {
                "Content-Type": "application/json"
            } 
        })
    }   

    return next(req);
};
