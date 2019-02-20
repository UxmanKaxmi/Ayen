import { InspectionsTabPage } from './../inspections-tab/inspections-tab';
import { ListPage } from './../list/list';
import { Component, ViewChild } from '@angular/core';
import { NavController, Events, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { HelpersProvider } from '../../providers/helpers/helpers';
import { ReportsTabPage } from '../reports-tab/reports-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public effect: any;
  public logoAnimation: string = "";
  public restAnimation: string = "";

  pages = [
    { pageName: InspectionsTabPage, title: 'Inspections', icon: 'ayen-inspectorIcon', id: 'inspectionTab'},
    { pageName: ReportsTabPage, title: 'Reports', icon: 'ayen-reportIcon', id: 'reportTab'},
  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public events: Events , public alertCtrl:AlertController,public helper:HelpersProvider) {

    events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
  }

  ionViewWillEnter() {
    this.applyAnimation();
    this.superTabs.enableTabSwipe('inspectionTab',false) // to disable scroll swiping
    this.superTabs.enableTabSwipe('reportTab',false) // to disable scroll swiping

  }

  onTabSelect(ev: any) {
    if (ev.index === 2) {
      let alert = this.alertCtrl.create({
        title: 'Secret Page',
        message: 'Are you sure you want to access that page?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTab);
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.selectedTab = ev.index;
            }
          }
        ]
      });
      alert.present();
    } else {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

  applyAnimation() {
    this.logoAnimation = "animated " + "fadeInDown fast";
    this.restAnimation = "animated " + "fadeInUp fast";
  }


}
