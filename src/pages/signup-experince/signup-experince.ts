import { ApiProvider } from './../../providers/api/api';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ConfirmationCodeSuccessPage } from './../confirmation-code-success/confirmation-code-success';
import { DatePicker } from '@ionic-native/date-picker';
import { AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HelpersProvider } from './../../providers/helpers/helpers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File, FileEntry } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { Platform } from 'ionic-angular';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';

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

  licenseInButtonText: string = "Upload your License..."
  CVInButtonText: string = "Upload your CV..."

  sceNumber: AbstractControl;
  formgroup: FormGroup;
  briefDescription: AbstractControl;
  expiryDateValue: string;
  defaultDate: any;
  filePath_forButtonText: any;
  signUpDataPersonal: any;
  dataList: any = "";
  willshowOtherTextField: boolean = false;
  membership: string;
  value: number;
  cvUri: any;
  licenseUri: any;
  filesPath: any;
  fileType: any;
  filesName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private helpers: HelpersProvider,
    public formbuilder: FormBuilder, private datePicker: DatePicker, private transfer: FileTransfer, private file: File, public fileChooser: FileChooser, public platform: Platform, public filePicker: IOSFilePicker, public api: ApiProvider
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

    this.CVInButtonText = "Upload your CV..."
    this.licenseInButtonText = "Upload your License..."


    if (this.focusExperience == 'other') {

      this.willshowOtherTextField = true;
      console.log('SHOW OTHER BOX')

    }
    else {
      this.willshowOtherTextField = false;

      console.log('DISABLED:SHOW OTHER BOX')

    }
    this.signUpDataPersonal = this.navParams.get('signUpDataPersonal')
    console.log('data from signUpDataPersonal', this.signUpDataPersonal)

  }












  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupExperincePage');
  }

  goBack() {
    this.navCtrl.pop()
  }
  submitReq() {
    if (this.formgroup.valid) {

      let dataFromSignupExperience = {
        AcademicMajor: this.academicMajor,
        YearsOfExperience: this.yearsOfExperience,
        SceMemberShipNumber: this.sceNumber.value,
        SceExpiryDate: this.expiryDateValue,
        ProfessionalDegree: this.degreePrefession,
        FocusExperience: this.focusExperience,
        Description: this.briefDescription.value,
        cvUri: this.cvUri,
        licenseUri: this.licenseUri


      }
      Object.assign(this.signUpDataPersonal, dataFromSignupExperience);
      console.log(this.signUpDataPersonal)

      // this.api.signUpService("signup",this.signUpDataPersonal).then(response => {
      //   this.dataList = response;

      //   if(this.dataList.message=="User Verified"){
      //     alert("LOGIN SUCCESS")
      //   }
      //     else {
      //       alert(this.dataList.message)

      //     }



      // });
      this.api.uploadFile(this.signUpDataPersonal)


      // this.navCtrl.push(ConfirmationCodeSuccessPage,{},{animate:false})
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
    if (membership == 'other') {
      this.value = 1;
    }
    else {
      this.value = undefined;
    }
  }

  setDefaultDate() {
    this.defaultDate = new Date();
    this.defaultDate = this.splitDate(this.defaultDate)
    console.log(this.defaultDate)
    this.expiryDateValue = this.defaultDate.toString();
  }


  upload_cv() {
    // this.platform.ready().then(() => {


    //   if (this.platform.is('ios')) {
    //     console.log("running on iOS device!");

    //     this.filePicker.pickFile()
    //       .then(uri => console.log(uri))
    //       .catch(err => console.log('Error', err));
    //   }


    // });


    // this.fileChooser.open()
    //   .then(url => this.setPath_cv(url))
    //   .catch(e => alert(e));



    this.fileChooser.open().then(uri =>
      {
        console.log(uri);
        // debugger;
        // this.filePath.resolveNativePath(uri).then(filePath =>
        //   {
        //     this.filesPath = filePath;
        //     this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo =>
        //       {
        //         let files = fileInfo as FileEntry;
        //         files.file(success =>
        //           {
        //             this.fileType   = success.type;
        //             this.filesName  = success.name;
        //           });
        //       },err =>
        //       {
        //         console.log(err);
        //         throw err;
        //       });
        //   },err =>
        //   {
        //     console.log(err);
        //     throw err;
        //   });
      },err =>
      {
        console.log(err);
        throw err;
      });





  }

  upload_lisence() {
    this.platform.ready().then(() => {


      if (this.platform.is('ios')) {
        console.log("running on iOS device!");
        this.filePicker.pickFile()
          .then(uri => console.log(uri))
          .catch(err => console.log('Error', err));
      }


    });

    console.log('clickrd')
    debugger;
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      headers: {}

    }

    fileTransfer.upload('asdasd', 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
        // success
      }, (err) => {
        // error
      })

    this.fileChooser.open()
      .then(url => this.setPath_license(url))
      .catch(e => alert(e));
  }

  checkLength_sceNumber(e, length) {
    console.log(e)
    if (this.sceNumber.value.length > length) {

      //to remove all the chracter after 10 digits
      let str = this.sceNumber.value.substring(0, length);
      this.formgroup.controls['sceNumber'].setValue(str);
    }
  }
  setPath_license(url) {
    this.licenseUri = url;
    console.log('licenseUri from setPAth function', this.licenseUri);
    console.log(url);
    let var1 = url.lastIndexOf("/") + 1;
    let var2 = url.substring(var1);
    this.licenseInButtonText = var2;




  }
  setPath_cv(url) {
    console.log('the Path is', url)


    this.cvUri = url;
    console.log('cvURI from setPAth function', this.cvUri);
    let var1 = url.lastIndexOf("/") + 1;
    let var2 = url.substring(var1);
    this.CVInButtonText = var2;




  }


}
