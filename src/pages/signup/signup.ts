import { SignupPersonalInfoPage } from './../signup-personal-info/signup-personal-info';
import { HelpersProvider } from './../../providers/helpers/helpers';
import { HomePage } from './../home/home';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ConfirmationCodePage } from '../confirmation-code/confirmation-code';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  formgroup:FormGroup;
  username:AbstractControl;
  password:AbstractControl;
  fullname:AbstractControl;
  mobile:AbstractControl;
  address:AbstractControl;
  city:AbstractControl;
  state:AbstractControl;
  country:AbstractControl;
  // signUpData:any;

  confirmPassword: AbstractControl;

  validate_confirmpassword: any;
  chkCP: boolean = false;
  inputAnimation: string;
  constructor(private googlePlus: GooglePlus,
    public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder,private helper:HelpersProvider) {


    let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
    this.formgroup = formbuilder.group({
      username:['',[Validators.required, Validators.pattern(EMAILPATTERN)]],
      password:['',Validators.required],





    });
    this.username = this.formgroup.controls['username'];
    this.password = this.formgroup.controls['password'];


  }

  ionViewWillEnter() {
    this.applyAnimation();
  }

  checkConfirmPassword(t){
    this.validate_confirmpassword = ""
    // console.log(this.password , this.confirmPassword ,t, t.target.value, t.target.value)
    if(t.target.value.length != 0){
    if(t.target.value === this.password.value){
      // console.log("Password matched")
      this.validate_confirmpassword = ""
      this.chkCP = true
    }else{
    // console.log("Password donot match")
    this.validate_confirmpassword = 'Passwords dont match'
    this.chkCP = false
  }
  }else{
    // this.validate_confirmpassword = MyApp.allFieldsReqText
    this.chkCP = false
  }
  }

  gotoSignupPersonalInfoPage(){
    if (this.formgroup.valid && this.chkCP==true) {

      let signUpData = {
        "Email":this.username.value,
        "Password":this.password.value,
        "EmailConfirmed":false,
      }
      console.log('signUpData  ',signUpData )
      this.navCtrl.push(SignupPersonalInfoPage,{ signUpData: signUpData },{animate:false})
    }
    else{
      alert('form not valid')
    }
  }
  gotoToLoggingButton(e,nextElement)
  {
    if(e.key === "Enter"){
      this.gotoSignupPersonalInfoPage()
    }
  }

  applyAnimation()
  {
    this.inputAnimation = "animated " + 'fadeInRight';
  }

  provideHepticFeedback(){
    this.helper.provideHepticFeedback()
  }

  goBack(){
    this.navCtrl.pop()
  }
  loginGoogle() {
    console.log("google login");
    this.googlePlus
      .login({})
      .then(res => console.log("Google Logged In! Welcome " + JSON.stringify(res)))
      .catch(err => console.error(err));
  }





}
