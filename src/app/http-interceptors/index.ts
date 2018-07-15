/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadInterceptor } from './upload-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
 
  { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },


];
