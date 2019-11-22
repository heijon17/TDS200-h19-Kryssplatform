import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { DatepickerPageModule } from './modals/datepicker/datepicker.module';

import { Camera } from '@ionic-native/camera/ngx';

import { CryptService } from './services/crypt.service';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';

const firebaseConfig = {
  apiKey: 'AIzaSyALGa528XdnA7MdPlQqLV7_9rs_futKXYY',
  authDomain: 'tds200-h19-5026.firebaseapp.com',
  databaseURL: 'https://tds200-h19-5026.firebaseio.com',
  projectId: 'tds200-h19-5026',
  storageBucket: 'tds200-h19-5026.appspot.com',
  messagingSenderId: '952391794474',
  appId: '1:952391794474:web:ee5a5e0d861f6555802853',
  measurementId: 'G-HLFPEY0KVX'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    DatepickerPageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireAuthGuardModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    ToastService,
    CryptService,
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
