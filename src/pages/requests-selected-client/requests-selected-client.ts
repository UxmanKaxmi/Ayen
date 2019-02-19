import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestsSelectedClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requests-selected-client',
  templateUrl: 'requests-selected-client.html',
})
export class RequestsSelectedClientPage {
  dataFromRequestSelected: any = [];
  invoiceName: any;
  uploadedFile:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsSelectedClientPage');
  }
  ionViewCanEnter() {
    this.dataFromRequestSelected =this.navParams.get('dataFromRequests')
    console.log("The data coming in: request-selected Page  ",this.dataFromRequestSelected)

    this.dataFromRequestSelected = this.dataFromRequestSelected.client_tab
    // this.invoiceName=this.dataFromRequestSelected.number
    // this.uploadedFile=this.dataFromRequestSelected.Documents

     }

}
