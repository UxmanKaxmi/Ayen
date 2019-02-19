import { SuperTabs } from 'ionic2-super-tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestsSelectedInspectionPage } from '../requests-selected-inspection/requests-selected-inspection';
import { RequestsSelectedPropertyPage } from '../requests-selected-property/requests-selected-property';
import { RequestsSelectedClientPage } from '../requests-selected-client/requests-selected-client';
import { RequestsPage } from '../requests/requests';

/**
 * Generated class for the RequestsSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requests-selected',
  templateUrl: 'requests-selected.html',
})
export class RequestsSelectedPage {
  tabs = [
    { pageName: RequestsSelectedInspectionPage, title: 'Inspection', icon: 'ayen-inspectorIcon', id:'inpectionPage' },
    { pageName: RequestsSelectedPropertyPage, title: 'Property', icon: 'ayen-reportIcon', id: 'propertPage'},
    { pageName: RequestsSelectedClientPage, title: 'CLient', icon: 'ayen-reportIcon', id: 'clientPage'},

  ];
  selectedTab = 0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  dataFromRequests: any =[] ;
  invoiceName: any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }



  ionViewDidLoad() {
    this.dataFromRequests =this.navParams.get('dataObject')
    this.invoiceName=this.dataFromRequests.detail_page.number
    // this.dataFromHome = this.dataFromHome.detail_page;

    console.log( 'request selected page', this.dataFromRequests)
  }
  openRequestsPage(){
    this.navCtrl.setRoot(RequestsPage)
  }
  onTabSelect(ev: any) {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.tabs[ev.index].id);
    }


}
