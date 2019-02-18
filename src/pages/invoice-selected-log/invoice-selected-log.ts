import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvoiceSelectedLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invoice-selected-log',
  templateUrl: 'invoice-selected-log.html',
})
export class InvoiceSelectedLogPage {
  dataFromHome: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.dataFromHome =this.navParams.get('dataFromHome')
    this.dataFromHome = this.dataFromHome.log_page_array
    console.log("The data coming in: invoice-selected-log Page  ",this.dataFromHome)

     }

}
