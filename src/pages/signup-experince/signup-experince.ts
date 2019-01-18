import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ConfirmationCodeSuccessPage } from './../confirmation-code-success/confirmation-code-success';
import { DatePicker } from '@ionic-native/date-picker';
import { AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HelpersProvider } from './../../providers/helpers/helpers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';

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

  public inputAnimation: string = "";
  academicMajor: string;
  yearsOfExperience: string;
  degreePrefession: string;
  focusExperience: string;

  sceNumber: AbstractControl;
  formgroup: FormGroup;
  briefDescription: AbstractControl;
  expiryDateValue: string;
  defaultDate: any;


  willshowOtherTextField: boolean = false;
  membership: string;
  value: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private helpers: HelpersProvider,
    public formbuilder: FormBuilder, private datePicker: DatePicker,private transfer: FileTransfer, private file: File,private fileChooser: FileChooser
  ) {
    this.setDefaultDate();

    this.formgroup = formbuilder.group({
      sceNumber: ['', Validators.required],
      briefDescription: [''],



    });

    this.sceNumber = this.formgroup.controls['sceNumber'];
    this.briefDescription = this.formgroup.controls['briefDescription'];

    this.academicMajor = "architect"
    this.yearsOfExperience = "exp1"
    this.degreePrefession = "normalEngineer"
    this.focusExperience = 'design';

    if (this.focusExperience == 'other') {

      this.willshowOtherTextField = true;
      console.log('SHOW OTHER BOX')

    }
    else {
      this.willshowOtherTextField = false;

      console.log('DISABLED:SHOW OTHER BOX')

    }

  }












  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupExperincePage');
  }

  goBack() {
    this.navCtrl.pop()
  }
  submitReq() {
    if (this.formgroup.valid) {
      this.navCtrl.push(ConfirmationCodeSuccessPage)
    }
    else {
      alert('form not validated')
    }
  }

  provideHepticFeedback() {
    this.helpers.provideHepticFeedback()
  }

  //for Animation
  applyAnimation() {
    this.inputAnimation = "animated " + 'fadeInRight';
  }

  ionViewWillEnter() {
    this.applyAnimation();
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      titleText: 'Select Expiry Date: ',
      allowOldDates: false,
      minDate: this.defaultDate - 10000,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      allowFutureDates: true,
    }).then(
      date => this.setDate(date),
      err => console.log('Error occurred while getting date: ', err)

    );

  }

  setDate(date) {

    //to split the whole date into simple form
    this.expiryDateValue = this.splitDate(date);

    // console.log(this.expiryDateValue)

  }

  splitDate(date) {

    let splitted = date.toString();
    date = splitted.split(" ", 4)
    date = date[1] + ' ' + date[2] + ', ' + date[3];

    return date;
  }

  onChange(membership) {
    if (membership == 'other')
    {
      this.value = 1;
    }
    else
    {
      this.value = undefined;
    }
  }

  setDefaultDate() {
    this.defaultDate = new Date();
    this.defaultDate = this.splitDate(this.defaultDate)
    console.log(this.defaultDate)
    this.expiryDateValue = this.defaultDate.toString();
  }


  upload() {
  //   console.log('clickrd')
  //   debugger;
  //   const fileTransfer: FileTransferObject = this.transfer.create();

  //   let options: FileUploadOptions = {
  //      fileKey: 'file',
  //      fileName: 'name.jpg',
  //      headers: {}

  //     }

  //   fileTransfer.upload('asdasd', 'http://192.168.0.7:8080/api/uploadImage', options)
  //    .then((data) => {
  //      // success
  //    }, (err) => {
  //      // error
  //    })

  this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => alert(e));
  }


}
