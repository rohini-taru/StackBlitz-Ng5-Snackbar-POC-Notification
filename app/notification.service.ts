import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class NotificationService {
  bgColor = 'white';
  txtColor = 'green';

  constructor(public snackBar: MatSnackBar) { }

  notifySuccess() {
   this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }

  notifyWarning() {
    
  }

  notifyError() {

  }

  notifyInfo() {
    
  }

  notifyData() {
    
  }
}