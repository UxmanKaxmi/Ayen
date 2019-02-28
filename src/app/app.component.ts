import { HomePage } from './../pages/home/home';
import { FinancialsPage } from './../pages/financials/financials';
import { SortModalPage } from './../pages/sort-modal/sort-modal';
import { QuotationPage } from './../pages/quotation/quotation';
import { InvoiceSelectedLogPage } from './../pages/invoice-selected-log/invoice-selected-log';
import { SignupExperincePage } from './../pages/signup-experince/signup-experince';
import { ConfirmationCodeSuccessPage } from './../pages/confirmation-code-success/confirmation-code-success';
import { ConfirmationCodePage } from './../pages/confirmation-code/confirmation-code';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Keyboard } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import { SignupPersonalInfoPage } from '../pages/signup-personal-info/signup-personal-info';
import { InspectionsTabPage } from '../pages/inspections-tab/inspections-tab';
import { ReportsTabPage } from '../pages/reports-tab/reports-tab';
import { RequestsPage } from '../pages/requests/requests';
import { FinancialsSelectedPage } from '../pages/financials-selected/financials-selected';
import { NotificationPage } from '../pages/notification/notification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  urlIcon1 = "assets/imgs/inspection-drawer.png";
  urlIcon2 = "assets/imgs/request.png";
  urlIcon3 = "assets/imgs/quotes.png";
  urlIcon4 = "assets/imgs/balance.png";
  urlIcon5 = "assets/imgs/settings.png";


  rootPage: any = LoginPage;

  pages: Array<{icon: string,title: string, component: any}>;

  constructor(public keyboard:Keyboard,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:this.urlIcon1 , title: 'Ayen', component: HomePage },
      { icon:this.urlIcon2 , title: 'Requests', component: RequestsPage },
      { icon:this.urlIcon3 , title: 'Quotations', component: QuotationPage },
      { icon:this.urlIcon4 , title: 'Financials', component: FinancialsPage },
      { icon:this.urlIcon5 , title: 'Settings', component: ListPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.keyboard.hasFocusedTextInput()
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#cccccc');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
