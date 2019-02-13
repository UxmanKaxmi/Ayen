import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InspectionsTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inspections-tab',
  templateUrl: 'inspections-tab.html',
})
export class InspectionsTabPage {
  draftsArray:any;
  urlIcon1 = "assets/imgs/inspection-drawer.png";
  completedArray: { img: string; number: string; address: string; }[];
  inProgressArray: { img: string; number: string; address: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.draftsArray = [

      {img:this.urlIcon1 , number: 'IN34560701AR1', address: "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701AR2', address: "draft address 2 Faisal bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701AR3', address: "draft address 3 Faisal bin Fahd Rd., Khobar, Eastern..." },
  
    ]

    this.inProgressArray = [

      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 1 Faisal bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 2 bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701', address: "Progress address 3 bin Fahd Rd., Khobar, Eastern..." },
  
    ]


    this.completedArray = [

      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 1 bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 2 bin Fahd Rd., Khobar, Eastern..." },
      {img:this.urlIcon1 , number: 'IN34560701', address: "completed address 3 bin Fahd Rd., Khobar, Eastern..." },
  
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsTabPage');
  }

}
