import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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

  confirmPassword: AbstractControl;

  validate_confirmpassword: any;
  chkCP: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder) {


    let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
    this.formgroup = formbuilder.group({
      username:['',[Validators.required, Validators.pattern(EMAILPATTERN)]],
      password:['',Validators.required],
      fullname:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],




    });
    this.username = this.formgroup.controls['username'];
    this.password = this.formgroup.controls['password'];
    this.fullname = this.formgroup.controls['fullname'];
    this.mobile = this.formgroup.controls['mobile'];
    this.address = this.formgroup.controls['address'];
    this.city = this.formgroup.controls['city'];
    this.state = this.formgroup.controls['state'];
    this.country = this.formgroup.controls['country'];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  checkConfirmPassword(t){
    this.validate_confirmpassword = ""
    console.log(this.password , this.confirmPassword ,t, t.target.value, t.target.value)
    if(t.target.value.length != 0){
    if(t.target.value === this.password.value){
      console.log("Password matched")
      this.validate_confirmpassword = ""
      this.chkCP = true
    }else{ console.log("Password donot match")
    this.validate_confirmpassword = 'Passwords dont match'
    this.chkCP = false
  }
  }else{
    // this.validate_confirmpassword = MyApp.allFieldsReqText
    this.chkCP = false
  }
  }

}
