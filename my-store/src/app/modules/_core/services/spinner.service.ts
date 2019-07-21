import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';

@Injectable()
export class SpinnerService {

  private _spinnerRef = this.createSpinnerRef();
  public show$: Subject<boolean> = new Subject();

  constructor(private _overlay: Overlay) {

    this.show$.subscribe(show => {
      if (show) {
        this.showSpinner();
      } else {
        this.hideSpinner();
      }
    });

  }

  private createSpinnerRef() {
    return this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'gray-backdrop',
      positionStrategy: this._overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  private showSpinner() {
    this._spinnerRef.attach(new ComponentPortal(MatSpinner));
  }

  private hideSpinner() {
    if (this._spinnerRef.hasAttached()) {
      this._spinnerRef.detach();
    }
  }
}
