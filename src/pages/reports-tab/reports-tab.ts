import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportsTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reports-tab',
  templateUrl: 'reports-tab.html',
})
export class ReportsTabPage {
  notSubmittedArray: { img: any; number: string; address: string;}[];
  underReviewArray: any= [];
  approvedArray: any=[];
  urlIcon1 = "assets/imgs/inspection-drawer.png";





  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.notSubmittedArray = [

      {img:this.urlIcon1 , number: 'IN34560701AR1', address: "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701AR2', address: "draft address 2 Faisal bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701AR3', address: "draft address 3 Faisal bin Fahd Rd., Khobar, Eastern..." },

    ]

    this.underReviewArray = [

      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 1 Faisal bin Fahd Rd., Khobar, Eastern...",date:'12/12/2019'},
      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 2 bin Fahd Rd., Khobar, Eastern...",date:'12/12/2039' },
      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 3 bin Fahd Rd., Khobar, Eastern...",date:'12/12/2219' },

    ]

    this.approvedArray = [

      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 1 bin Fahd Rd., Khobar, Eastern...",date:'12/12/2019' },
      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 2 bin Fahd Rd., Khobar, Eastern...",date:'12/12/2019' },
      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 3 bin Fahd Rd., Khobar, Eastern...",date:'12/12/2019' },

    ]
  }
  }

  // ionViewDidLoad() {
  // }


