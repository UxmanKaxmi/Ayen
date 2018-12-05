import { DeviceFeedback } from '@ionic-native/device-feedback';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelpersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpersProvider {

  public effect : any;
  constructor(private deviceFeedback: DeviceFeedback) {
    console.log('Hello HelpersProvider Provider');
  }


  //for providting vibration on focusing input
  provideHepticFeedback(){
    this.deviceFeedback.haptic(1);
  }

}
