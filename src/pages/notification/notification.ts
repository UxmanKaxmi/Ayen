import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NotificationTabPage } from '../notification-tab/notification-tab';
import { NotificationInboxTabPage } from '../notification-inbox-tab/notification-inbox-tab';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public effect: any;
  public logoAnimation: string = "";
  public restAnimation: string = "";

  pages = [
    { pageName: NotificationTabPage, title: 'Notifications', icon: 'ayen-inspectorIcon', id: 'inspectionTab'},
    { pageName: NotificationInboxTabPage, title: 'Inbox', icon: 'ayen-reportIcon', id: 'reportTab'},
  ];

  selectedTab = 0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

}
