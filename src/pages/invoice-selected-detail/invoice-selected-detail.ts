import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvoiceSelectedDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invoice-selected-detail',
  templateUrl: 'invoice-selected-detail.html',
})
export class InvoiceSelectedDetailPage {
  dataFromHome: any = [];
  invoiceName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // debugger;

  }

  ionViewCanEnter() {
    debugger;
    this.dataFromHome =this.navParams.get('dataFromHome')
    console.log(this.dataFromHome)
    this.invoiceName=this.dataFromHome.number

     }

}
