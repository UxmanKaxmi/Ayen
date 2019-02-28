import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinancialsSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-financials-selected',
  templateUrl: 'financials-selected.html',
})
export class FinancialsSelectedPage {
  dataFromFinancials: any;
  transactionName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.dataFromFinancials =this.navParams.get('dataFromFinancials')
    console.log( 'Quotation selected page', this.dataFromFinancials)

    this.transactionName=this.dataFromFinancials.transactionName
    this.dataFromFinancials = this.dataFromFinancials.transactionDetails;

  }


}
