import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirmation-code',
  templateUrl: 'confirmation-code.html',
})
export class ConfirmationCodePage {
   maxtime:any = 60

    timer:any
  hidevalue: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.StartTimer()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationCodePage');
  }

  gotoNextNumber(nextElement){

        nextElement.setFocus();



    }
    StartTimer(){
      var tim = setInterval(x =>
        {
              if(this.maxtime>-1){
              console.log(this.maxtime--);
              }
              else{
              return true;
              }

        }, 1000);

    }


}
