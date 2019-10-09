import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@reserb-app/web';

@Component({
  selector: 'reserb-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
