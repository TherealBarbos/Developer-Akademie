import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-9c243","appId":"1:678622745200:web:6aecfd35d2ba92747e1ab5","storageBucket":"danotes-9c243.appspot.com","apiKey":"AIzaSyA7-E7PGya_Rtxv0i0Ts9A5z64ovbEg_yg","authDomain":"danotes-9c243.firebaseapp.com","messagingSenderId":"678622745200"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
