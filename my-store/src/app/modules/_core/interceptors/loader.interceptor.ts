import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/modules/_core/services/spinner.service';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

    private _counter$ = new BehaviorSubject<number>(0);

    constructor(private _spinnerService: SpinnerService) {

        this._counter$.subscribe(count => {
            if (count === 0) {
                this._spinnerService.show$.next(false);
            } else {
                this._spinnerService.show$.next(true);
            }
        });

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.showLoader();

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                this.onEnd();
            }));

    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this._counter$.next(this._counter$.value + 1);
    }

    private hideLoader(): void {
        this._counter$.next(this._counter$.value - 1);
    }
}
