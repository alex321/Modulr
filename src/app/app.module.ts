import {ApplicationRef, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {createNewHosts, removeNgStyles} from '@angularclass/hmr';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    FlexLayoutModule, SharedModule
  ],
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) { console.log('HMR store', store); }
  hmrOnDestroy(store) {
    let cmpLocation =
        this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
