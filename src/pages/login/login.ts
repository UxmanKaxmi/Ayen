import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  formgroup:FormGroup;
  username:AbstractControl;
  password:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder) {

    //for Validation
    let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
    this.formgroup = formbuilder.group({
      username:['',[Validators.required, Validators.pattern(EMAILPATTERN)]],
      password:['',Validators.required]
    });
    this.username = this.formgroup.controls['username'];
    this.password = this.formgroup.controls['password'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loggingIn(){
    alert('Loggingin')
    this.navCtrl.push(HomePage)
  }
  gotoSignupPage(){
    this.navCtrl.push(SignupPage)

  }

  //check if tHe Enter key Pressed and move to the next input
  gotoToPasswordInput(e,nextElement)
  {
    if(e.key === "Enter"){
      nextElement.setFocus();

    }

  }

  gotoToLoggingButton(e,nextElement)
  {
    if(e.key === "Enter"){
      this.loggingIn()
    }
  }

}
