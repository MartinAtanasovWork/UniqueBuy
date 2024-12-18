import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("token") || ""; 
  
  if(token != ""){   
    req = req.clone({
      setHeaders: {
          "Auth-Token": token
      } 
  })
  }

  return next(req);
};
