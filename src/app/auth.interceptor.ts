import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtén el token de autenticación desde donde lo tengas almacenado (por ejemplo, localStorage o una variable)
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJpZGVudGlmaWNhY2lvbiI6IjA5OTk5OTk5OSIsIm5vbWJyZXMiOiJDaHJpcyIsImFwZWxsaWRvcyI6Im9jaCIsInVzZXJuYW1lIjoiY2hyeCIsInBhc3N3b3JkIjoiJDJiJDEwJE9Zd2JGLjNFd0swMWJJY1JNamlNaE8zVWZQLzV3Z0g2OEtSc3NEa2phSzdveGQ3SlouWW1PIiwiZW1haWwiOiJjaHJpc0BtYWlsLmNvbSIsInRlbGVmb25vIjoiMDk5OTk5OTkiLCJkaXJlY2Npb24iOiJhc2Rhc2Rhc2QiLCJmZWNoYUluaWNpbyI6IjIwMjMtMDktMTVUMDU6MDA6MDAuMDAwWiIsImlkUm9sIjoxLCJlc3RhZG8iOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDktMTVUMTM6NTI6MDAuMDQ5WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMTVUMTM6NTI6MDAuMDQ5WiJ9LCJpYXQiOjE2OTQ3ODg0NzV9.0ZBlkG_eOtdu2XnLtOzruENEfr5pko_9yHK8Ob6iTpg';

    // Clona la solicitud original y agrega el encabezado "Authorization" con el token Bearer
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Continúa con la solicitud clonada
    return next.handle(authRequest);
  }
}
