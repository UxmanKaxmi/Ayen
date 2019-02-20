import { QuotationSelectedPage } from './../pages/quotation-selected/quotation-selected';
import { QuotationPage } from './../pages/quotation/quotation';
import { InvoiceSelectedLogPage } from './../pages/invoice-selected-log/invoice-selected-log';
import { InvoiceSelectedPage } from './../pages/invoice-selected/invoice-selected';
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
import { CountryPickerModule } from 'ngx-country-picker';

import {  IOSFilePickerOriginal } from '@ionic-native/file-picker';
import { StarRatingModule } from 'ionic3-star-rating';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { InspectionsTabPage } from '../pages/inspections-tab/inspections-tab';
import { ReportsTabPage } from '../pages/reports-tab/reports-tab';
import { InvoiceSelectedDetailPage } from '../pages/invoice-selected-detail/invoice-selected-detail';
import { RequestsPage } from '../pages/requests/requests';
import { RequestsSelectedPage } from '../pages/requests-selected/requests-selected';
import { RequestsSelectedClientPage } from '../pages/requests-selected-client/requests-selected-client';
import { RequestsSelectedInspectionPage } from '../pages/requests-selected-inspection/requests-selected-inspection';
import { RequestsSelectedPropertyPage } from '../pages/requests-selected-property/requests-selected-property';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InvoiceSelectedPage,
    ListPage,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,RequestsPage,
    InvoiceSelectedDetailPage,
    InvoiceSelectedLogPage,QuotationPage,QuotationSelectedPage,
    ConfirmationCodeSuccessPage,
    SignupExperincePage,RequestsSelectedPage,RequestsSelectedClientPage,RequestsSelectedInspectionPage,RequestsSelectedPropertyPage,
    SignupPersonalInfoPage,InspectionsTabPage,ReportsTabPage

  ],
  imports: [
    BrowserModule,HttpModule,CountryPickerModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
  }),
  StarRatingModule,
  SuperTabsModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RequestsPage,
    ListPage,
    InvoiceSelectedPage,
    InvoiceSelectedDetailPage,
    InvoiceSelectedLogPage,
    LoginPage,
    SignupPage,RequestsSelectedPage,RequestsSelectedClientPage,RequestsSelectedInspectionPage,RequestsSelectedPropertyPage,
    ConfirmationCodePage,
    ConfirmationCodeSuccessPage,QuotationPage,QuotationSelectedPage,
    SignupExperincePage,
    SignupPersonalInfoPage,InspectionsTabPage,ReportsTabPage
  ],
  providers: [
    StarRatingModule,
    SuperTabsModule,

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
