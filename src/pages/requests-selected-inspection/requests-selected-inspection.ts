import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestsSelectedInspectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requests-selected-inspection',
  templateUrl: 'requests-selected-inspection.html',
})
export class RequestsSelectedInspectionPage {

  dataFromHome: any = [];
  invoiceName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.dataFromHome =this.navParams.get('dataFromRequests')
    console.log("The data coming in: request-selected Page  ",this.dataFromHome)

    this.dataFromHome = this.dataFromHome.inspection_tab
    this.invoiceName=this.dataFromHome.number

     }

}
