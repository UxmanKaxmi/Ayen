import { DeviceFeedback } from '@ionic-native/device-feedback';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the HelpersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpersProvider {

  public effect : any;
  constructor(private deviceFeedback: DeviceFeedback,public alertCtrl:AlertController) {
    console.log('Hello HelpersProvider Provider');
  }


  //for providting vibration on focusing input
  provideHepticFeedback(){
    this.deviceFeedback.haptic(1);
  }


  presentAlert(typeOfAlert,title,subTitle) {
    this.deviceFeedback.haptic(0);
    let alert;
    if(typeOfAlert || title || subTitle ){
    alert = this.alertCtrl.create({
        cssClass:typeOfAlert,
        title: title,
        subTitle: subTitle,
        buttons: ['Dismiss']

      });
      alert.present();

    }
    else {
     alert = this.alertCtrl.create({
        cssClass:'alert-error',
        title: 'Error',
        subTitle: 'There is something wrong with the service. Please contact App Support.',
        buttons: ['Dismiss']
      });
      alert.present();

    }

  }

}
