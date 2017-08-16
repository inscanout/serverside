var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { GooglePlus } from '@ionic-native/google-plus';
// Importing AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyBrJuCOihScJhi1AYqbGLydMRiOZkyq1VI",
    authDomain: "demoapp-4ea42.firebaseapp.com",
    databaseURL: "https://demoapp-4ea42.firebaseio.com",
    projectId: "demoapp-4ea42",
    storageBucket: "",
    messagingSenderId: "680611620102"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                SplashScreen,
                StatusBar,
                AuthProvider,
                GooglePlus
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map