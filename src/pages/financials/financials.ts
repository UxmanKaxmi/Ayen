import { Component } from '@angular/core';
import {  NavController, NavParams,MenuController } from 'ionic-angular';
import { FinancialsSelectedPage } from '../financials-selected/financials-selected';

/**
 * Generated class for the FinancialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-financials',
  templateUrl: 'financials.html',
})
export class FinancialsPage {
  transactionService:any=[];

  constructor(private menu: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.transactionService = [
      {
        availableBalance:'+6,084.00',
        pendingBalance:'+2,028.00',
        paidBalance:'20,280.00',
        transactions:[
          {
            transactionName:'TA2390932',
            orderId:'1213423101',
            transactionAmount:'+1,014 SAR',
            transactionData:"12.01.2018",
            transactionDetails:[
              {
                transactionID:'TA2390932',
                requestId:'1213423101',
                releaseDate:'28.02.2019',
                requestDate:'15.02.2019',
                transactionPackage:"Ayen Basic Package",
                packageAmount:"+1,014 SAR",
                subtotal:'1,690.00 SAR',
                ayenComission:'-676.00 SAR',
                vat:'0.00 SAR',
                total:'1,014.00 SAR',



              }
            ]
          },
          {
            transactionName:'TA2390932',
            orderId:'1213423101',
            transactionAmount:'+1,014 SAR',
            transactionData:"12.01.2018",
            transactionDetails:[
              {
                transactionID:'TA2390932',
                requestId:'1213423101',
                releaseDate:'28.02.2019',
                requestDate:'15.02.2019',
                transactionPackage:"Ayen Basic Package",
                packageAmount:"+1,014 SAR",
                subtotal:'1,690.00 SAR',
                ayenComission:'-676.00 SAR',
                vat:'0.00 SAR',
                total:'1,014.00 SAR',



              }
            ]
          },

        ],

      },

    ]
  }

  openFinancialSelected(data){

    console.log(data)
    this.navCtrl.push(FinancialsSelectedPage,{dataFromFinancials:data})
  }

  ionViewDidLoad() {
  }




}
