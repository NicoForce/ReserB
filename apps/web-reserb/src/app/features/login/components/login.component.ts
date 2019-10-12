import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';

@Component({
  selector: 'reserb-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends BaseComponent {

  constructor(){
    super();
  }

}
