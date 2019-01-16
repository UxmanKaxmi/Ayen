import { SignupExperincePage } from './../signup-experince/signup-experince';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup-personal-info',
  templateUrl: 'signup-personal-info.html',
})
export class SignupPersonalInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPersonalInfoPage');
  }
  goBack( ){
    this.navCtrl.pop()
  }
  gotoSignupExperience(){
    this.navCtrl.push(SignupExperincePage);
  }

}
