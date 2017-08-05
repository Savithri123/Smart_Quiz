import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LecturerLoginPage} from '../pages/lecturer-login/lecturer-login';
import {AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LecturerRegPage } from '../pages/lecturer-reg/lecturer-reg';
import { LecturerViewPage } from '../pages/lecturer-view/lecturer-view';
import { CreateQuestionsPage } from '../pages/create-questions/create-questions';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LecturerLoginPage,
   CreateQuestionsPage
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,
    LecturerLoginPage,
    CreateQuestionsPage
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
