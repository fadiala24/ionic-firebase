import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';

//firebase
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';
import{AngularFireStorageModule} from '@angular/fire/compat/storage';

// Environnement

import { environment } from '../environments/environment.prod';


//AUTH SERVICE
import{AuthService} from './services/auth.service';

//AUTH GUARD
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireAuthModule
    ],
  providers: [
    AuthService,
    AuthGuard,
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
