import { ConfirmationCodeSuccessPage } from './../confirmation-code-success/confirmation-code-success';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

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
  TimerTextAnimation: string;
  buttonAnimation: string;
  textAnimation: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.StartTimer()

  }



  gotoNextNumber(e,nextElement,prevElement){

        if(e.key === "Backspace"){
            prevElement.setFocus();
          }
          else if(e.key === "Enter"){
            this.navCtrl.setRoot(ConfirmationCodeSuccessPage);
          }
          else{
            nextElement.setFocus();

          }
    }


    StartTimer(){
      var tim = setInterval(x =>
        {
              if(this.maxtime>0){
              this.maxtime--
              }
              else{
                this.navCtrl.pop();
              }

        }, 1000);

    }

    ionViewWillEnter() {
      this.applyAnimation();
  }
    applyAnimation()
    {
      this.textAnimation = "animated " + 'fadeInDown';
      this.buttonAnimation = "animated " + 'fadeInUp';
      this.TimerTextAnimation = "animated " + 'tada';



    }


}
