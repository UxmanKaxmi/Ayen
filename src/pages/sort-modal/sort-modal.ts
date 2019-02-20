import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SortModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sort-modal',
  templateUrl: 'sort-modal.html',
})
export class SortModalPage {
  sortArray:any =[]
  groupArray:any=[];
  public logoAnimation: string = "";
  public restAnimation: string = "";
  fadeInUpAnimation: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sortArray=[
      {
        sortName:'Request ID'
      },
      {
        sortName:'Last Update'
      },
      {
        sortName:'Request Value'
      },
      {
        sortName:'Request Status'
      }
    ]
    this.groupArray=[
      {
        groupName:'Package Type'
      },
      {
        groupName:'City'
      },
      {
        groupName:'none'
      },
    ]
  }



  ionViewWillEnter() {
    this.applyAnimation();
  }
  ionViewWillLeave(){
  this.leaveAnimation();
  }
  applyAnimation() {
    this.logoAnimation = "animated " + "fadeInLeft faster";
    this.restAnimation = "animated " + "fadeInUp faster";
    this.fadeInUpAnimation = "animated " + "fadeInUp faster";

  }
  leaveAnimation() {
       this.fadeInUpAnimation = "animated " + "fadeInDown faster";

  }

}
