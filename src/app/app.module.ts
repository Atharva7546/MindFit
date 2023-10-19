import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import {AngularFireModule} from '@angular/fire/compat'

// import {AngularFireModule} from '@angular/fire';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
// <<<<<<< HEAD
//     AppRoutingModule,
//     AngularFireModule.initializeApp(environment.firebase)
//   //   provideFirebaseApp(() => initializeApp(environment.firebase)),
//   //   provideAuth(() => getAuth()),
//   //   provideFirestore(() => getFirestore())
// =======

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,

// >>>>>>> 5985428a025ab3a5d72402fab7e217a00eafc09f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
