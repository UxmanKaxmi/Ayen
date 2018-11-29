import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationCodeSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirmation-code-success',
  templateUrl: 'confirmation-code-success.html',
})
export class ConfirmationCodeSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationCodeSuccessPage');
  }
  gotoLogin(){
    this.navCtrl.popTo(LoginPage)
  }

}
