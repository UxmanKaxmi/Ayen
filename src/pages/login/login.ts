import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

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
  method : string = "";
  request : string = "";
  dataList : any = "";

  constructor(public api:ApiProvider,private googlePlus: GooglePlus,public fb: Facebook,public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder) {

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


 //assigning values of method for the request
 this.method = "Login";
 // assigning values of signup form to request soap
 this.request ="<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\">"+
  "<soapenv:Header/>"+
  "<soapenv:Body>"+
  "<tem:Login>"+
  "<tem:usernameOrEmail>"+

  "kazmi58@gmail.com"+

  "</tem:usernameOrEmail>"+
  "<tem:userPassword>"+


  "123456"+

  "</tem:userPassword>"+
  "<tem:guestToken></tem:guestToken>"+
"</tem:Login>"+



  "</soapenv:Body>"+
 "</soapenv:Envelope>";

    this.api.apiService(this.request,this.method)
    .then(response => {
        this.dataList = response;
        this.dataList = JSON.parse(this.dataList._body);

        // checking for success or failure
      console.log(this.dataList)
      alert('data recieved')
        //FOR CUSTOMER DOESNT EXIST ERROR
        if (this.dataList.aStatus == "CustomerNotExist") {


        }

        //FOR wrongPasswordText ERROR

         if (this.dataList.aStatus == "WrongPassword") {


       }



         if (this.dataList.aStatus == "Success") {




       }

   });














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
  loginFacebook(){
  // Login with permissions
  this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
  .then( (res: FacebookLoginResponse) => {

      // The connection was successful
      if(res.status == "connected") {

          // Get user ID and Token
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;

          // Get user infos from the API
          this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

              // Get the connected user details
              var gender    = user.gender;
              var birthday  = user.birthday;
              var name      = user.name;
              var email     = user.email;

              console.log("=== USER INFOS ===");
              console.log("Gender : " + gender);
              console.log("Birthday : " + birthday);
              console.log("Name : " + name);
              console.log("Email : " + email);

              // => Open user session and redirect to the next page
              alert('Welcome'+ name)
              this.navCtrl.push(HomePage)

          });

      }
      // An error occurred while loging-in
      else {

          console.log("An error occurred connecting facebook...");

      }

  })
  .catch((e) => {
      console.log('Error logging into Facebook', e);
  });
  }
  loginGoogle(){
    console.log('google login')
    this.googlePlus.login({})
    .then(res =>   alert('Google Logged In! Welcome '+res.displayName)




    )
    .catch(err => console.error(err));

  }



}
