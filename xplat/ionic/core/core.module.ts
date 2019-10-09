import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@reserb-app/utils';
import { ReserbAppCoreModule } from '@reserb-app/web';

@NgModule({
  imports: [ReserbAppCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class ReserbAppIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ReserbAppIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'ReserbAppIonicCoreModule');
  }
}
