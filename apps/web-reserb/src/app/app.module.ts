import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// libs
import { environment } from '@reserb-app/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
