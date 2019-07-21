import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/modules/_core/components/error-dialog/error-dialog.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _dialog: MatDialog) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // Redirect to login

                } else {
                    // Show error dialog
                    this._dialog.open(ErrorDialogComponent, {
                        maxWidth: '600px',
                        data: { message: error.message }
                    });
                }
                return throwError(error);
            }));
    }
}
