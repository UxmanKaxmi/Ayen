import { SignupPersonalInfoPage } from './../pages/signup-personal-info/signup-personal-info';
import { SignupExperincePage } from './../pages/signup-experince/signup-experince';
import { GooglePlus } from '@ionic-native/google-plus';
import { ConfirmationCodeSuccessPage } from './../pages/confirmation-code-success/confirmation-code-success';
import { ConfirmationCodePage } from './../pages/confirmation-code/confirmation-code';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from "@angular/http";
import { DeviceFeedback } from '@ionic-native/device-feedback';

import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';


import { FileTransfer, FileUploadOptions, FileTransferObject, } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { ApiProvider } from '../providers/api/api';
import { HelpersProvider } from '../providers/helpers/helpers';
import { DatePicker } from '@ionic-native/date-picker';
import { FilePath } from '@ionic-native/file-path';

import {  IOSFilePickerOriginal } from '@ionic-native/file-picker';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    ConfirmationCodeSuccessPage,
    SignupExperincePage,
    SignupPersonalInfoPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    ConfirmationCodeSuccessPage,
    SignupExperincePage,
    SignupPersonalInfoPage



  ],
  providers: [
    GooglePlus,
    Facebook,DeviceFeedback,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,FilePath,
    HelpersProvider,DatePicker,FileTransfer,FileTransferObject,FileChooser,IOSFilePicker,File
  ]
})
export class AppModule {}
