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
        detail_page:{
            img: this.urlIcon1,
            number: "IN34560234R1",
            address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
            requestId:'RQ8093291',
            package:'Basic Platinum',
            inspectionDate:'28.02.2019',
            time:'10:30am',
            clientsComments:'Some comments for the client.',
            latLong:'24.0345000,25.533443',
          },
          log_page_array:[
                {
                date: '11.02.2014',
                longLat: "76.302947, 70.209038",
                startTime:"08:29am",
                endingTime:'2:08pm',
                mainTime:'(03:28:49)',
              },
              {
                date: '11.02.2014',
                longLat: "76.302947, 70.209038",
                startTime:"08:29am",
                endingTime:'2:08pm',
                mainTime:'(03:28:49)',
              },  {
                date: '11.02.2014',
                longLat: "76.302947, 70.209038",
                startTime:"08:29am",
                endingTime:'2:08pm',
                mainTime:'(03:28:49)',
              }
          ]
      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },

        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },

        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
      }
    ];

    this.inProgressArray = [
      {
        detail_page:{
            img: this.urlIcon1,
            number: "IN34560234R1",
            address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
            requestId:'RQ8093291',
            package:'Basic Platinum',
            inspectionDate:'28.02.2019',
            time:'10:30am',
            clientsComments:'Some comments for the client.',
            latLong:'24.0345000,25.533443',
          },


          log_page_array:[
            {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          },
          {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          },  {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          }
      ]

      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },


        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },


        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
      }
    ];

    this.completedArray = [
      {
        detail_page:{
            img: this.urlIcon1,
            number: "IN34560234R1",
            address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
            requestId:'RQ8093291',
            package:'Basic Platinum',
            inspectionDate:'28.02.2019',
            time:'10:30am',
            clientsComments:'Some comments for the client.',
            latLong:'24.0345000,25.533443',
          },


          log_page_array:[
            {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          },
          {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          },  {
            date: '11.02.2014',
            longLat: "76.302947, 70.209038",
            startTime:"08:29am",
            endingTime:'2:08pm',
            mainTime:'(03:28:49)',
          }
      ]

      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },


        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
      },
      {
        detail_page:{
          img: this.urlIcon1,
          number: "IN34560234R1",
          address:"draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern...",
          requestId:'RQ8093291',
          package:'Basic Platinum',
          inspectionDate:'28.02.2019',
          time:'10:30am',
          clientsComments:'Some comments for the client.',
          latLong:'24.0345000,25.533443',
        },


        log_page_array:[
          {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },
        {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        },  {
          date: '11.02.2014',
          longLat: "76.302947, 70.209038",
          startTime:"08:29am",
          endingTime:'2:08pm',
          mainTime:'(03:28:49)',
        }
    ]
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
    this.navParams.get("rootNavCtrl").push(pageName, { dataObject: dataToPush });
  }
}
