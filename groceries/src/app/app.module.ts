import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GroceriesServiceService} from './services/groceries-service.service';
import {InputDialogServiceService} from './services/input-dialog-service.service';
import {SocialSharing,SocialSharingOriginal} from '@ionic-native/social-sharing';

// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharingOriginal, InputDialogServiceService, GroceriesServiceService]
  ,bootstrap: [AppComponent]
})
export class AppModule {}
