import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Firebase} from '@ionic-native/firebase/ngx';
import {FcmService} from './shared/service/fcm.service';

const config = {
  apiKey: "AIzaSyCMVmThnonMwjQZLZWV9FlK6GYgVx3Dygo",
  authDomain: "heartstonelib-ionic-app.firebaseapp.com",
  databaseURL: "https://heartstonelib-ionic-app.firebaseio.com",
  projectId: "heartstonelib-ionic-app",
  storageBucket: "heartstonelib-ionic-app.appspot.com",
  messagingSenderId: "363106018352"
};

@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
      FcmService
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
