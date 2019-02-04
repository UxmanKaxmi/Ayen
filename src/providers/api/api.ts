import { SignupExperincePage } from './../../pages/signup-experince/signup-experince';
import { LoadingController } from 'ionic-angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class ApiProvider {

  public static APILink: string = 'http://ayen.apptech.com.tr/ayen/Api/';
  // APILink: string = 'http://192.168.0.100/ayen/Api/';
  body: any;
  bodyExample: any;
  body2: any;
  changeDetectorRef: any;
  prg: number;
  newjsonObject: any;
  defaultDate: any;
  // bodyJSON:JSON

  constructor(public http: Http, private transfer: FileTransfer, public loadingctrl: LoadingController) {
  }
  //LOGIN SERVICE
  public loginService(afterLink, body) {
    console.log(afterLink+ ' BODY ', body)
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(ApiProvider.APILink + afterLink, JSON.stringify(body), options)
        .toPromise()
        .then((response) => {
          console.log('API Response from ' + afterLink + ': ', response.json());
          resolve(response.json());
        })
        .catch((error) => {
          console.error('API Error from ' + afterLink + ': ', error.status);
          console.error('API Error from ' + afterLink + ', ', JSON.stringify(error));
          reject(error);
        });
    });
  }


  //SIGNUP SERVICE
  public signUpService(body, afterLink) {
    console.log(afterLink.toUpperCase()+ ' BODY ', body)
    this.body2 = "Email=" + body.Email +
      "&EmailConfirmed=" + 'true' +
      "&Password=" + body.Password +
      "&Prefix=" + body.Prefix +
      "&FirstName=" + body.FirstName +
      "&LastName=" + body.LastName +
      "&PhoneNumber=" + body.PhoneNumber +
      "&PhoneNumberConfirmed=" + 'true' +
      "&Gender=" + body.Gender +
      "&AcademicMajor=" + body.AcademicMajor +
      "&YearsOfExperience=" + body.YearsOfExperience +
      "&ProfessionalDegree=" + body.ProfessionalDegree +
      "&FocusExperience=" + body.FocusExperience +
      "&Description=" + body.Description +
      "&Region=" + body.Region +
      "&City=" + body.City +
      "&OrganizationName=" + body.OrganizationName +
      "&CRNumber=" + body.CRNumber +
      "&OrgLicenceNumber=" + body.OrgLicenceNumber +
      "&OrgExpiryDate=" + body.OrgExpiryDate +
      "&RoleType=" + body.RoleType +
      "&SceMemberShipNumber=" + body.SceMemberShipNumber +
      "&SceExpiryDate=" + body.SceExpiryDate +
      "&NationalityId=" + body.NationalityId +
      "&Nationality=" + body.Nationality +
      "&OrgLicence=" + body.OrgLicence +
      "&Cv=" + body.Cv;

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(ApiProvider.APILink + afterLink, this.body2, options)
        .toPromise()
        .then((response) => {
          console.log('API Response from              ' + afterLink + ': ', response.json());
          resolve(response.json());
        })
        .catch((error) => {
          console.error('API Error from ' + afterLink + ': ', error.status);
          console.error('API Error from ' + afterLink + ', ', JSON.stringify(error));
          reject(error);
        });
    });
  }




  uploadCVApi(uri, fileType, timeStampDate, random4DigitValue) {
       return new Promise((resolve, reject) => {

    let loader = this.loadingctrl.create({
      content: "Uploading CV..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'Cv',
      fileName: 'Cv' + timeStampDate + '_' + random4DigitValue + '.' + fileType,
      chunkedMode: false,
      mimeType: "application/json",

    }
    // fileTransfer.onProgress((e)=>
    // {
    //     this.prg=(e.lengthComputable) ?  Math.round((e.loaded * 100) / e.total) : -1;
    //     this.changeDetectorRef.detectChanges();
    //     console.log(this.prg)
    // });

    fileTransfer.upload(uri, ApiProvider.APILink + 'uploadcv', options)
      .then((data) => {
        this.newjsonObject = JSON.parse(data.response)
        console.log(this.newjsonObject);
        alert(this.newjsonObject.message);
        loader.dismiss();
        resolve(this.newjsonObject.message)
      }, (err) => {
        console.log(err);
        loader.dismiss();
        resolve(err)
        alert(err);
      });

      });

  }


  uploadLicenseApi(uri, fileType, timeStampDate, random4DigitValue) {
   return new Promise((resolve, reject) => {
    let loader = this.loadingctrl.create({
      content: "Uploading License..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'OrgLicence',
      fileName: 'OrgLicence' + timeStampDate + '_' + random4DigitValue + '.' + fileType,
      chunkedMode: false,
      mimeType: "application/json",

    }
    debugger;
    fileTransfer.onProgress((e)=>
    {
        this.prg=(e.lengthComputable) ?  Math.round((e.loaded * 100) / e.total) : -1;
        console.log(this.prg)
        // SignupExperincePage.progress=this.prg
    });

    fileTransfer.upload(uri, ApiProvider.APILink + 'uploadlicence', options)
      .then((data) => {
        this.newjsonObject = JSON.parse(data.response)
        console.log(this.newjsonObject);
        alert(this.newjsonObject.message);
        loader.dismiss();
        resolve(this.newjsonObject.message)

      }, (err) => {
        console.log(err);
        loader.dismiss();
        reject(err)
        alert(err);
      });

    });


  }
  splitDate(date) {
    debugger;
    let splitted = date.toString();
    // date = splitted.split(" ", 9)
    // // date = date[5]  + date[6]  + date[7];

    return date;
  }


}
