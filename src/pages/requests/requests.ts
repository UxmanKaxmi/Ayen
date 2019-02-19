import { InvoiceSelectedPage } from "./../invoice-selected/invoice-selected";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RequestsSelectedPage } from "../requests-selected/requests-selected";

/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-requests",
  templateUrl: "requests.html"
})
export class RequestsPage {
  basicPackageArray: any;
  urlIcon1 = "assets/imgs/inspection-drawer.png";
  completedArray: any = [];
  customArray: any = [];

  public logoAnimation: string = "";
  public restAnimation: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.basicPackageArray = [
      {
        detail_page: {
          number: "IN34560234R1",
          address:
            "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern Western Southern Thing...",
          requestId: "RQ8093291",
          price: "2,000 SR",
          status: "Accepted"
        },
        inspection_tab: {
          quotationId: "7647",
          package: "Ayen Basic",
          inspectionDate: "11.02.2014",
          timeToVisit: "2:08pm",
          requestCost: "1,690.00 SAR",
          inspectorShare: "1,690.00 SAR",
          clientComments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud"
        },

        property_tab: {
          unitTime: "Apartment",
          unitNumber: "3",
          buildInSpace: "145",
          buildingNumber: "2423",
          address: "1,690.00 SAR",
          Documents: [
            {
              fileName: "Structural Certificate",
              fileType: "sheet.docx"
            },
            {
              fileName: "Structural Assurance Certificate",
              fileType: "Construction.docx"
            },
            {
              fileName: "Construction Safety Certificate",
              fileType: "guarantee.docx"
            }
          ]
        },
        client_tab: {
          fullName: "ALI ALI",
          email: "zaki_ssd@asd.com",
          mobileNumber: "042343434"
        }
      },
      {
        detail_page: {
          number: "IN34560234R1",
          address:
            "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern Western Southern Thing...",
          requestId: "RQ8093291",
          price: "2,000 SR",
          status: " Not Accepted"
        },
        inspection_tab: {
          quotationId: "7647",
          package: "Ayen Basic",
          inspectionDate: "11.02.2014",
          timeToVisit: "2:08pm",
          requestCost: "1,690.00 SAR",
          inspectorShare: "1,690.00 SAR",
          clientComments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud"
        },

        property_tab: {
          unitTime: "Flat",
          unitNumber: "3",
          buildInSpace: "145",
          buildingNumber: "2423",
          address: "1,690.00 SAR",
          Documents: [
            {
              fileName: "Structural Certificate",
              fileType: "sheet.docx"
            },
            {
              fileName: "Structural Assurance Certificate",
              fileType: "Construction.docx"
            },
            {
              fileName: "Construction Safety Certificate",
              fileType: "guarantee.docx"
            }
          ]
        },
        client_tab: {
          fullName: "usman",
          email: "ali_@asd.com",
          mobileNumber: "052143423"
        }
      }
    ];

    this.customArray = [
      {
        detail_page: {
          number: "IN34560234R1",
          address:
            "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern Western Southern Thing...",
          requestId: "RQ8093291",
          price: "2,000 SR",
          status: "Accepted"
        },
        inspection_tab: {
          quotationId: "7647",
          package: "Ayen Basic",
          inspectionDate: "11.02.2014",
          timeToVisit: "2:08pm",
          requestCost: "1,690.00 SAR",
          inspectorShare: "1,690.00 SAR",
          clientComments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud"
        },

        property_tab: {
          unitTime: "Apartment",
          unitNumber: "3",
          buildInSpace: "145",
          buildingNumber: "2423",
          address: "1,690.00 SAR",
          Documents: [
            {
              fileName: "Structural Certificate",
              fileType: "sheet.docx"
            },
            {
              fileName: "Structural Assurance Certificate",
              fileType: "Construction.docx"
            },
            {
              fileName: "Construction Safety Certificate",
              fileType: "guarantee.docx"
            }
          ]
        },
        client_tab: {
          fullName: "Younus ALI",
          email: "asds@asd.com",
          mobileNumber: "13413423"
        }
      },
      {
        detail_page: {
          number: "IN34560234R1",
          address:
            "draft address 1 Prince Faisal bin Fahd Rd., Khobar, Eastern Western Southern Thing...",
          requestId: "RQ8093291",
          price: "2,000 SR",
          status: " Not Accepted"
        },
        inspection_tab: {
          quotationId: "7647",
          package: "Ayen Basic",
          inspectionDate: "11.02.2014",
          timeToVisit: "2:08pm",
          requestCost: "1,690.00 SAR",
          inspectorShare: "1,690.00 SAR",
          clientComments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud"
        },

        property_tab: {
          unitTime: "Flat",
          unitNumber: "3",
          buildInSpace: "145",
          buildingNumber: "2423",
          address: "1,690.00 SAR",
          Documents: [
            {
              fileName: "Structural Certificate",
              fileType: "sheet.docx"
            },
            {
              fileName: "Structural Assurance Certificate",
              fileType: "Construction.docx"
            },
            {
              fileName: "Construction Safety Certificate",
              fileType: "guarantee.docx"
            }
          ]
        },
        client_tab: {
          fullName: "Murad",
          email: "Murad@asd.com",
          mobileNumber: "34234234"
        }
      }
    ];
  }
  openRequestSelected(dataArray) {
    this.openNewPageFromSuperTabs(RequestsSelectedPage, dataArray);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RequestsPage");
  }
  openNewPageFromSuperTabs(pageName, dataToPush) {
    // this.navParams.get("rootNavCtrl").push(pageName, { dataObject: dataToPush });
    this.navCtrl.setRoot(pageName, { dataObject: dataToPush });
  }

  ionViewWillEnter() {
    this.applyAnimation();
  }
  applyAnimation() {
    this.logoAnimation = "animated " + "fadeInLeft";
    this.restAnimation = "animated " + "fadeInUp";
  }
}
