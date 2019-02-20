import { QuotationPage } from './../quotation/quotation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotationSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotation-selected',
  templateUrl: 'quotation-selected.html',
})
export class QuotationSelectedPage {

  dataFromQuotation: any =[] ;
  invoiceName: any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    this.dataFromQuotation =this.navParams.get('dataObject')
    this.invoiceName=this.dataFromQuotation.detail_page.number
    this.dataFromQuotation = this.dataFromQuotation.inspection_tab;

    console.log( 'Quotation selected page', this.dataFromQuotation)
  }
  openQuotationPage(){
      this.navCtrl.setRoot(QuotationPage,{},{animate: true,})

  }

}
