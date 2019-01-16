import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupExperincePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup-experince',
  templateUrl: 'signup-experince.html',
})
export class SignupExperincePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupExperincePage');
  }

  goBack(){
    this.navCtrl.pop()
  }
  gotoSignupExperience(){
    alert('done')
 }

}
