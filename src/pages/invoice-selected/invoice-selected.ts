import { SuperTabs } from 'ionic2-super-tabs';
import { HelpersProvider } from './../../providers/helpers/helpers';
import { InvoiceSelectedLogPage } from './../invoice-selected-log/invoice-selected-log';
import { InvoiceSelectedDetailPage } from './../invoice-selected-detail/invoice-selected-detail';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

/**
 * Generated class for the InvoiceSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invoice-selected',
  templateUrl: 'invoice-selected.html',
})
export class InvoiceSelectedPage {
  invoiceName:any;
  dataFromHome: any = [];
  logoAnimation: string;
  restAnimation: string;



  tabs = [
    { pageName: InvoiceSelectedDetailPage, title: 'Detail', icon: 'ayen-inspectorIcon', id:'detailPage' },
    { pageName: InvoiceSelectedLogPage, title: 'Log', icon: 'ayen-reportIcon', id: 'logPage'},
  ];
  selectedTab = 0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events , public alertCtrl:AlertController,public helper:HelpersProvider) {
  }

  ionViewDidLoad() {
    debugger;
    this.dataFromHome =this.navParams.get('dataObject')
    this.invoiceName=this.dataFromHome.detail_page.number
    // this.dataFromHome = this.dataFromHome.detail_page;

    console.log(this.dataFromHome)
    console.log('ionViewDidLoad InvoiceSelectedPage');
  }
  ionViewWillEnter() {
    this.applyAnimation();
  }
  applyAnimation() {
    this.logoAnimation = "animated " + "fadeInDown";
    this.restAnimation = "animated " + "fadeInUp";
  }

  onTabSelect(ev: any) {
    if (ev.index === 2) {
      let alert = this.alertCtrl.create({
        title: 'Secret Page',
        message: 'Are you sure you want to access that page?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTab);
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.selectedTab = ev.index;
            }
          }
        ]
      });
      alert.present();
    } else {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.tabs[ev.index].id);
    }
  }


}
