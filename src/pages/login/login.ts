import { HelpersProvider } from "./../../providers/helpers/helpers";
import { ApiProvider } from "./../../providers/api/api";
import { HomePage } from "./../home/home";
import { SignupPage } from "./../signup/signup";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { DeviceFeedback } from "@ionic-native/device-feedback";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  formgroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  method: string = "";
  request: string = "";
  dataList: any = "";

  public effect: any;
  public logoAnimation: string = "";
  public restAnimation: string = "";

  constructor(
    public api: ApiProvider,
    private googlePlus: GooglePlus,
    public fb: Facebook,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    private helpers: HelpersProvider
  ) {
    //for Validation
    let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
    this.formgroup = formbuilder.group({
      username: ["", [Validators.required, Validators.pattern(EMAILPATTERN)]],
      password: ["", Validators.required]
    });
    this.username = this.formgroup.controls["username"];
    this.password = this.formgroup.controls["password"];
  }

  ionViewWillEnter() {
    this.applyAnimation();
  }

  loggingIn() {
    //To check if form is valid
    if(this.formgroup.valid){

    let body = {
      "Email":this.username.value,
      "Password":this.password.value,
      "Location":"24.8830857,67.0678734"
    }



    this.api.loginService("login",body).then(response => {
      this.dataList = response;

      if(this.dataList.message=="User Verified"){
        alert("LOGIN SUCCESS")
      }
        else {
          alert(this.dataList.message)

        }



    });

  }//form is valid

  else {
    alert('Please complete the form')
  }

  }

  gotoSignupPage() {
    this.navCtrl.push(SignupPage);
  }

  //check if tHe Enter key Pressed and move to the next input
  gotoToPasswordInput(e, nextElement) {
    console.log(e);
    if (e.key === "Enter") {
      nextElement.setFocus();
    } else if (e.key === " ") {
      // console.log(this.username.value);
      this.username = this.username.value.slice(0, -1)

      // console.log(this.username.value);
    }
  }

  gotoToLoggingButton(e, nextElement) {
    if (e.key === "Enter") {
      this.loggingIn();
    }
  }

  loginFacebook() {
    // Login with permissions
    this.fb
      .login(["public_profile", "user_photos", "email", "user_birthday"])
      .then((res: FacebookLoginResponse) => {
        // The connection was successful
        if (res.status == "connected") {
          // Get user ID and Token
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;

          // Get user infos from the API
          this.fb
            .api("/me?fields=name,gender,birthday,email", [])
            .then(user => {
              // Get the connected user details
              var gender = user.gender;
              var birthday = user.birthday;
              var name = user.name;
              var email = user.email;

              console.log("=== USER INFOS ===");
              console.log("Gender : " + gender);
              console.log("Birthday : " + birthday);
              console.log("Name : " + name);
              console.log("Email : " + email);

              // => Open user session and redirect to the next page
              alert("Welcome" + name);
              this.navCtrl.push(HomePage);
            });
        }
        // An error occurred while loging-in
        else {
          console.log("An error occurred connecting facebook...");
        }
      })
      .catch(e => {
        console.log("Error logging into Facebook", e);
      });
  }

  loginGoogle() {
    console.log("google login");
    this.googlePlus
      .login({})
      .then(res => alert("Google Logged In! Welcome " + res.displayName))
      .catch(err => console.error(err));
  }

  applyAnimation() {
    this.logoAnimation = "animated " + "fadeInDown";
    this.restAnimation = "animated " + "fadeInUp";
  }
  provideHepticFeedback() {
    this.helpers.provideHepticFeedback();
  }
}
