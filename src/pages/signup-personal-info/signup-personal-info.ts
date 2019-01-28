import { HelpersProvider } from './../../providers/helpers/helpers';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { SignupExperincePage } from './../signup-experince/signup-experince';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

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

  formgroup:FormGroup;
  firstName:AbstractControl;
  lastName:AbstractControl;
  id:AbstractControl;
  mobile:AbstractControl;
  organization:AbstractControl;
  crNumber:AbstractControl;
  organizationLicenseNumber:AbstractControl;


  gender: string ;
  city: string ;
  registerinAyenAs: string;
  region: string;
  nationality: string;
  mrMrs: string;

  expiryDate:AbstractControl;
  expiryDateValue:string ;
  defaultDate:any;
  dataFromSignUp:any;

  inputAnimation: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public helper:HelpersProvider,public formbuilder: FormBuilder,private datePicker: DatePicker) {

    this.gender ='m';
    this.city ='city1';
    this.registerinAyenAs='Examiner';
    this.region='Central';
    this.nationality="Saudi Arabia"
    this.mrMrs="Mr.";





    this.formgroup = formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      id:['',Validators.required],
      mobile:['',Validators.required],
      organization:['',Validators.compose([ Validators.required])],
      crNumber:['',Validators.required],
      organizationLicenseNumber:['',Validators.required],
      expiryDate:['',Validators.required],


    });

    this.firstName = this.formgroup.controls['firstName'];
    this.lastName = this.formgroup.controls['lastName'];
    this.id = this.formgroup.controls['id'];
    this.mobile = this.formgroup.controls['mobile'];
    this.organization = this.formgroup.controls['organization'];
    this.crNumber = this.formgroup.controls['crNumber'];
    this.organizationLicenseNumber = this.formgroup.controls['organizationLicenseNumber'];
    this.expiryDate = this.formgroup.controls['expiryDate'];



    //to set default value of date to now
    this.setDefaultDate();
    this.dataFromSignUp =this.navParams.get('signUpData')





  }

  setDefaultDate(){
    this.defaultDate= new Date();
    this.defaultDate=this.splitDate(this.defaultDate)
    console.log(this.defaultDate)
    this.expiryDateValue=this.defaultDate.toString();
  }


  goBack( ){
    this.navCtrl.pop()
  }
  gotoSignupExperience(){
    if(this.formgroup.valid){
      let newObject = {
        FirstName: this.firstName.value,
        LastName: this.lastName.value,
        Prefix:this.mrMrs,
        NationalityId: this.id.value,
        PhoneNumber: this.mobile.value,
        PhoneNumberConfirmed: true,
        Nationality: this.nationality,
        Gender: this.gender,
        Region: this.region,
        City: this.city,
        RoleType: this.registerinAyenAs,
        OrganizationName:this.organization.value,
        CRNumber: this.crNumber.value,
        OrgLicenceNumber: this.organizationLicenseNumber.value,
        OrgExpiryDate: this.expiryDateValue,

      }
      //to add the newObject into dataFromSignUp
      Object.assign(this.dataFromSignUp,newObject);



    this.navCtrl.push(SignupExperincePage,{ signUpDataPersonal: this.dataFromSignUp },{animate:false});
    }
    else {
      alert("Form not Validated")
    }
  }

  provideHepticFeedback(){
    this.helper.provideHepticFeedback()
  }

//for Animation
  applyAnimation()
  {
    this.inputAnimation = "animated " + 'fadeInRight';
  }

  ionViewWillEnter() {
    this.applyAnimation();
  }
  showDatePicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      titleText:'Select Expiry Date: ',
      allowOldDates:false,
      minDate: this.defaultDate - 10000,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      allowFutureDates: true,
    }).then(
      date => this.setDate(date),
      err => console.log('Error occurred while getting date: ', err)

    );

  }

  setDate(date){

    //to split the whole date into simple form
    this.expiryDateValue=this.splitDate(date);

    // console.log(this.expiryDateValue)

  }

  splitDate(date){

    let splitted=date.toString();
    date = splitted.split(" ",4)
    date=date[1]+' '+date[2]+', '+date[3];

    return date;
  }

  gotoSelectDate(e, nextElement) {


    if(this.organizationLicenseNumber.value.length>15){

      //to remove all the chracter after 10 digits
    let str = this.organizationLicenseNumber.value.substring(0, 15);
    this.formgroup.controls['organizationLicenseNumber'].setValue(str);




    }
    if (e.key === "Enter") {

      this.showDatePicker();
    }
  }

  checkLength_id(e,length){
    console.log(e)
    if(this.id.value.length>length){
      console.log('greater than 10')

      //to remove all the chracter after 10 digits
    let str = this.id.value.substring(0, length);
    this.formgroup.controls['id'].setValue(str);




    }
  }

  checkLength_mobile(e,length){
    console.log(e)
    if(this.mobile.value.length>length){
      console.log('greater than 10')

      //to remove all the chracter after 10 digits
    let str = this.mobile.value.substring(0, length);
    this.formgroup.controls['mobile'].setValue(str);
    }
 }


 checkLength_crNumber(e,length){
  console.log(e)
  if(this.crNumber.value.length>length){
    console.log('greater than 10')

    //to remove all the chracter after 10 digits
  let str = this.crNumber.value.substring(0, length);
  this.formgroup.controls['crNumber'].setValue(str);
  }
}


checkLength_organizationLicenseNumber(e,length){
  console.log(e)
  if(this.organizationLicenseNumber.value.length>length){
    console.log('greater than 10')

    //to remove all the chracter after 10 digits
  let str = this.organizationLicenseNumber.value.substring(0, length);
  this.formgroup.controls['organizationLicenseNumber'].setValue(str);
  }
}
}
