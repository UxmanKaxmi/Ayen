import { ApiProvider } from './../../providers/api/api';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ConfirmationCodeSuccessPage } from './../confirmation-code-success/confirmation-code-success';
import { DatePicker } from '@ionic-native/date-picker';
import { AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HelpersProvider } from './../../providers/helpers/helpers';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { File, FileEntry } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { Platform } from 'ionic-angular';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { FilePath } from '@ionic-native/file-path';
import { ThrowStmt } from '@angular/compiler';
import {NgZone} from '@angular/core';


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
  prg_license: number;
  prg_cv:number
  changeDetectorRef: any;
  newjsonObject: any = [];
  jsonNew: JSON;
  CvName: any = "";
  LicenseName: any = "";
  items: any;
  result: JSON;
  allData: JSON
  timeStampDate: any;
  progress: 0 ;
  isCvUploaded:boolean = false;
  isLicenseUploaded:boolean = false;
  showCvLoader:boolean=false;
  showLicenseLoader:boolean=false;



  constructor(public navCtrl: NavController, public navParams: NavParams, private helpers: HelpersProvider,
    public formbuilder: FormBuilder, private datePicker: DatePicker, private transfer: FileTransfer, private file: File, public fileChooser: FileChooser, public platform: Platform, public filePicker: IOSFilePicker, public api: ApiProvider, public loadingctrl: LoadingController, private filePath: FilePath, public _zone: NgZone
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
  }

  goBack() {
    this.navCtrl.pop()
  }
  submitReq() {
    if(this.isLicenseUploaded && this.isCvUploaded){
      if (this.formgroup.valid) {

        let dataFromSignupExperience = {
          AcademicMajor: this.academicMajor,
          YearsOfExperience: this.yearsOfExperience,
          SceMemberShipNumber: this.sceNumber.value,
          SceExpiryDate: this.expiryDateValue,
          ProfessionalDegree: this.degreePrefession,
          FocusExperience: this.focusExperience,
          Description: this.briefDescription.value,
          // cvUri: this.cvUri,
          // licenseUri: this.licenseUri,
          Cv: this.CvName,
          OrgLicence: this.LicenseName

        }
        Object.assign(this.signUpDataPersonal, dataFromSignupExperience);
        console.log(this.signUpDataPersonal)




        this.api.signUpService(this.signUpDataPersonal,'signup')
        .then(
          response => {
            this.dataList = response;
            if(this.dataList.message=="Email Already Exist Try Other Unique Email"){
              alert(this.dataList.message)
            }
              else {
                alert(this.dataList.message)
              }
          }
        )
        .catch(
          error => {
            alert(error)
          }
        )



      }
      else {
        alert('form not validated')
      }//check for form not validated
    }
    else {
      alert('Please Upload the appropriate files...')
      this.isCvUploaded=false
      this.isLicenseUploaded=false

    }//check for files uploaded

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
    this.showCvButton() //show license Upload Loader
    this.fileChooser.open().then(uri => {
      console.log(uri);
      this.file.resolveLocalFilesystemUrl(uri) //to get file extension
        .then((fileInfo) => {
          // alert(JSON.stringify(fileInfo, null, 4));
          let files = fileInfo as FileEntry;
          files.file(success => {
            this.fileType = success.type;
            this.filesName = success.name;
            console.log(this.fileType)
            this.setPath_cv(uri, this.fileType)


          });

        }).catch((err) => {
          alert(JSON.stringify(err, null, 4));
        });


    }, err => {
        console.log(err);
        throw err;
      });

  }





  upload_license() {
    this.showLicenseButton() //show license Upload Loader
    this.fileChooser.open().then(uri => {
      console.log(uri);
      this.file.resolveLocalFilesystemUrl(uri) //to get file extension
        .then((fileInfo) => {
          let files = fileInfo as FileEntry;
          files.file(success => {
            this.fileType = success.type;
            this.filesName = success.name;
            console.log(this.fileType)
            this.setPath_license(uri, this.fileType)


          });

        }).catch((err) => {
          alert(JSON.stringify(err, null, 4));
        });


    }, err => {
        console.log(err);
        throw err;
      });
  }






  checkLength_sceNumber(e, length) {
    console.log(e)
    if (this.sceNumber.value.length > length) {

      //to remove all the chracter after 10 digits
      let str = this.sceNumber.value.substring(0, length);
      this.formgroup.controls['sceNumber'].setValue(str);
    }
  }




  setPath_license(uri, fileType) {

    let random4DigitValue = Math.floor(1000 + Math.random() * 9000);
    this.timeStampDate = Date.now();
    let fileType2 = fileType.lastIndexOf("/") + 1
    let fileType3 = fileType.substring(fileType2)

    try {
      if (fileType3 == "mpeg" || fileType3 == "png" || fileType3 == "jpeg" || fileType3 == "pdf" || fileType3 == "doc" || fileType3 == "docx") {
        // if (fileType3 != "png" ) {


        this.cvUri = uri;
        let var1 = uri.lastIndexOf("/") + 1;
        let var2 = uri.substring(var1);
        this.licenseInButtonText = var2 + '.' + fileType3;
        this.LicenseName = 'OrgLicence' + this.timeStampDate + '_' + random4DigitValue + '.' + fileType3

    //---------------FOR USING THE API SERVICE TO UPLOAD LICENSE-------------------------//
        // this.api.uploadLicenseApi(uri, fileType3, this.timeStampDate, random4DigitValue)
        // .then(response=>{
        //   if(response=="Licence Upload Successfully"){                          //for checking if the license is uploaded.
        //     this.isLicenseUploaded=true;
        //   }
        //   else {
        //     this.isLicenseUploaded=false;

        //   }
        // })
        // .catch(err=>{
        //   alert(err)
        // })

        // let loader = this.loadingctrl.create({
        //   content: "Uploading License..."
        // });
        // loader.present();




        const fileTransfer: FileTransferObject = this.transfer.create();
        let options: FileUploadOptions = {
          fileKey: 'OrgLicence',
          fileName: 'OrgLicence' + this.timeStampDate + '_' + random4DigitValue + '.' + fileType3,
          chunkedMode: false,
          mimeType: "application/json",

        }
        fileTransfer.onProgress((e)=>
        {
          this._zone.run(() => this.prg_license=(e.lengthComputable) ?  Math.round((e.loaded * 100) / e.total) : -1
          )
        });

        fileTransfer.upload(uri, ApiProvider.APILink + 'uploadlicence', options)
          .then((data) => {
            this.newjsonObject = JSON.parse(data.response)
            console.log(this.newjsonObject);
            alert(this.newjsonObject.message);

          }, (err) => {
            console.log(err);
            alert(err);
          });

      }
      else {
        alert('Please upload a valid format')

      }
    } catch (error) {
      alert(error)

    }
  }




  setPath_cv(uri, fileType) {
    console.log(fileType)

    let fileType2 = fileType.lastIndexOf("/") + 1
    let fileType3 = fileType.substring(fileType2)


    try {
      if ( fileType3 == "mpeg" || fileType3 == "png" || fileType3 == "jpeg" || fileType3 == "pdf" || fileType3 == "doc" || fileType3 == "docx") {

        this.cvUri = uri;
        // console.log('cvURI from setPAth function', this.cvUri);
        let var1 = uri.lastIndexOf("/") + 1;
        let var2 = uri.substring(var1);
        this.CVInButtonText = var2 + '.' + fileType3;
        let random4DigitValue = Math.floor(1000 + Math.random() * 9000);
        this.timeStampDate = Date.now();
        this.CvName = 'Cv' + this.timeStampDate + '_' + random4DigitValue + '.' + fileType3
        console.log("THE SAVED CV NAME IS " + this.CvName)






        // this.api.uploadCVApi(uri, fileType3, this.timeStampDate, random4DigitValue)
        // .then(response=>{
        //   if(response=="Cv Upload Successfully"){                          //for checking if the license is uploaded.
        //     this.isCvUploaded=true;
        //   }
        //   else {
        //     this.isCvUploaded=false;

        //   }
        // })
        // .catch(err=>{
        //   alert(err)
        // })


        const fileTransfer: FileTransferObject = this.transfer.create();
        let options: FileUploadOptions = {
          fileKey: 'Cv',
          fileName: 'Cv' + this.timeStampDate + '_' + random4DigitValue + '.' + fileType3,
          chunkedMode: false,
          mimeType: "application/json",

        }
        fileTransfer.onProgress((e)=>
        {
          this._zone.run(() => this.prg_cv=(e.lengthComputable) ?  Math.round((e.loaded * 100) / e.total) : -1
          )
        });

        fileTransfer.upload(uri, ApiProvider.APILink + 'uploadcv', options)
          .then((data) => {
            this.newjsonObject = JSON.parse(data.response)
            console.log(this.newjsonObject);
            alert(this.newjsonObject.message);
          }, (err) => {
            console.log(err);
            alert(err);
          });



      }
      else {
        alert('Please upload a valid format')

      }
    } catch (error) {
      alert(error)

    }
    console.log(fileType3)

  }

  hideLicenseButton(){

    if(this.showLicenseLoader == true){
      this.showLicenseLoader = false

    }
    else {
      this.showLicenseLoader = false

    }


  }

  showLicenseButton(){
    if(this.showLicenseLoader == false){
      this.showLicenseLoader = true

    }
    else {
      this.showLicenseLoader = false

    }
  }

  hideCvButton(){

    if(this.showCvLoader == true){
      this.showCvLoader = false

    }
    else {
      this.showCvLoader = false

    }


  }

  showCvButton(){
    if(this.showCvLoader == false){
      this.showCvLoader = true

    }
    else {
      this.showCvLoader = false

    }
  }



}
