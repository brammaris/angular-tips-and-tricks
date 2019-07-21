import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteService, SpinnerService, ErrorInterceptor, LoaderInterceptor } from 'src/app/modules/_core';
import { ApiModule, Configuration, ConfigurationParameters } from 'src/app/modules/_core/api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

export function ApiConfig(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    apiKeys: { ['']: '' },
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ApiModule.forRoot(ApiConfig),
  ],
  providers: [
    RouteService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  entryComponents: [ MatSpinner, ErrorDialogComponent ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Import CoreModule only in AppModule');
    }
  }
}
