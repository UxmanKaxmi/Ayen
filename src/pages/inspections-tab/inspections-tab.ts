import { InvoiceSelectedPage } from "./../invoice-selected/invoice-selected";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { InvoiceSelectedLogPage } from "../invoice-selected-log/invoice-selected-log";

/**
 * Generated class for the InspectionsTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-inspections-tab",
  templateUrl: "inspections-tab.html"
})
export class InspectionsTabPage {
  draftsArray: any;
  urlIcon1 = "assets/imgs/inspection-drawer.png";
  completedArray:any=[];
  inProgressArray: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.draftsArray = [
      {
        img: this.urlIcon1,
        number: "IN34560234R1",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic Platinum',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
        // long



      },
      {
        img: this.urlIcon1,
        number: "IN3456072342341",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic Gold',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      },
      {
        img: this.urlIcon1,
        number: "IN345607012342",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic For',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      }
    ];

    this.inProgressArray = [
      {
        img: this.urlIcon1,
        number: "IN3456070234234",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic New',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      },
      {
        img: this.urlIcon1,
        number: "IN34560701123sqd",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic platinum',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      },
      {
        img: this.urlIcon1,
        number: "IN34560745646",
        address: "Progress address 3 bin Fahd Rd., Khobar, Eastern..."
      }
    ];

    this.completedArray = [
      {
        img: this.urlIcon1,
        number: "IN34560701A78789",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Basic Gold',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      },
      {
        img: this.urlIcon1,
        number: "IN345607016786",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'Not Basic',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      },
      {
        img: this.urlIcon1,
        number: "IN34560701A45646",
        address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
        requestId:'RQ8093291',
        package:'New',
        inspectionDate:'28.02.2019',
        time:'10:30am',
        clientsComments:'Some comments for the client.',
        latLong:'24.0345000,25.533443',
      }
    ];
  }
  openInvoiceSelected(dataArray) {

    this.openNewPageFromSuperTabs(InvoiceSelectedPage, dataArray);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InspectionsTabPage");
  }

  //to open a new tab from superTabs
  openNewPageFromSuperTabs(pageName, dataToPush) {
    debugger;
    this.navParams.get("rootNavCtrl").push(pageName, { dataObject: dataToPush });
  }
}
