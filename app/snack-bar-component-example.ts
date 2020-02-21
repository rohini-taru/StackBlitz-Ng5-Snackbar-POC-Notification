import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'snack-bar-component-example.html',
})
export class SnackBarComponentExample {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 50000,
    });
  }

  openSnackBar1() {
    this.snackBar.openFromComponent(notifyComponents, {
      duration: 50000,
    });
  }

  openSnackBar2() {
    this.snackBar.openFromComponent(successNotifyComponent, {
      duration: 50000,
    });
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`.example-pizza-party { color: hotpink; background: white; }`],
})
export class PizzaPartyComponent {}



@Component({
  selector: 'notify-container',
  template: `
  <div class="notify-container">
    <span>Hello</span>
    <span>Rohini</span>
  </div>`,
  styles: [`
    .notify-container {
      background: linear-gradient(45deg, gray, white, white, gray);
      border: 2px solid blue;
      border-radius: 10px;
      padding: 0 10px;
      height: 100%;
      width: 100%;
      color: red;
      text-align: center;
    }
  `]
})
export class notifyComponents {}

@Component({
  selector: 'notify-success',
  template: `
    <span class="notify-success-container">
    I am a success notification message!
    </span>`,

  styles: [`
    notify-success { 
      border: 1px solid black; 
    }
    .notify-success-container {
      background: radial-gradient(circle, white, lightgreen, green);
      height: 100%; width: 100%;
      color: black;
    }
  `],
})
export class successNotifyComponent {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */