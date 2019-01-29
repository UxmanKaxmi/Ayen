import { LoadingController } from 'ionic-angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class ApiProvider {

  // APILink: string = 'http://ayen.apptech.com.tr/ayen/Api/';
  APILink: string = 'http://192.168.0.100/ayen/Api/';
  body: any;
  bodyExample: any;
  body2: any;

  // bodyJSON:JSON

  constructor(public http: Http,private transfer: FileTransfer,public loadingctrl:LoadingController) {
  }
  //LOGIN SERVICE
  public loginService(afterLink,body) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.APILink + afterLink , JSON.stringify(body), options)
        .toPromise()
        .then((response) => {
          console.log('API Response from '+afterLink+ ': ', response.json());
          resolve(response.json());
        })
        .catch((error) => {
          console.error('API Error from '+afterLink+ ': ', error.status);
          console.error('API Error from '+afterLink+ ', ', JSON.stringify(error));
          reject(error);
        });
    });
  }


//SIGNUP SERVICE
  public signUpService(afterLink,body) {
    console.log("The body being send in signup",body)
    this.uploadFile(body)
    // return new Promise((resolve, reject) => {
    //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post(this.APILink + afterLink , body, options)
    //     .toPromise()
    //     .then((response) => {
    //       console.log('API Response from '+afterLink+ ': ', response.json());
    //       resolve(response.json());
    //     })
    //     .catch((error) => {
    //       console.error('API Error from '+afterLink+ ': ', error.status);
    //       console.error('API Error from '+afterLink+ ', ', JSON.stringify(error));
    //       reject(error);
    //     });
    // });
  }



  uploadFile(body) {

debugger;
      this.body2 =  "Email=" +body.Email +
                  "&EmailConfirmed=" +'true'+
                  "&Password=" +body.Password+
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
                  "&NationalityId=" + body.NationalityId ;
                  // "&OrgLicence=" + body.licenseUri +
                  // "&Cv=" + body.cvUri ;



    console.log(body)
    let loader = this.loadingctrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'Cv',
      fileName: 'Cv',

      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {
        "Email": body.Email,
        "EmailConfirmed": 'true',
        "Password": body.Password,
        "Prefix": body.Prefix,
        "FirstName": body.FirstName,
        "LastName": body.LastName,
        "PhoneNumber" : body.PhoneNumber ,
        "PhoneNumberConfirmed" : body.PhoneNumberConfirmed ,
        "Gender":body.Gender ,
        "AcademicMajor":body.AcademicMajor ,
        "YearsOfExperience":body.YearsOfExperience ,
        "ProfessionalDegree":body.ProfessionalDegree ,
        "FocusExperience":body.FocusExperience ,
        "Description":body.Description ,
        "Nationality":body.Nationality ,
        "Region":body.Region ,
        "City":body.City ,
        "OrganizationName":body.OrganizationName ,
        "CRNumber":body.CRNumber ,
        "OrgLicenceNumber":body.OrgLicenceNumber ,
        "OrgExpiryDate":body.OrgExpiryDate ,
        "RoleType":body.RoleType ,
        "SceMemberShipNumber":body.SceMemberShipNumber ,
        "SceExpiryDate":body.SceExpiryDate ,
        "NationalityId":body.NationalityId ,




      }



    }
    // fileTransfer.onProgress((e)=>
    // {
    //     this.prg=(e.lengthComputable) ?  Math.round((e.loaded * 100) / e.total) : -1;
    //     this.changeDetectorRef.detectChanges();
    // });

    fileTransfer.upload(body.cvUri, this.APILink + 'signup', options)
      .then((data) => {
      console.log(JSON.stringify(data)+" Uploaded Successfully");
      loader.dismiss();
      console.log("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      alert(err);
    });
  }


}
