import { LoginPage } from './../login/login';
import { QuotationSelectedPage } from './../quotation-selected/quotation-selected';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SortModalPage } from '../sort-modal/sort-modal';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {
  approvedArray: any;
  urlIcon1 = "assets/imgs/inspection-drawer.png";
  completedArray: any = [];
  underReviewArray: any = [];
  rejectedArray: any = [];

  public logoAnimation: string = "";
  public restAnimation: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.approvedArray = [
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

    this.underReviewArray = [
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

    this.rejectedArray = [
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
  openQuotationSelected(dataArray) {
    this.openNewPageFromSuperTabs(QuotationSelectedPage, dataArray);
  }

  presentSortModal() {
    let sortModal = this.modalCtrl.create(SortModalPage, { userId: 8675309 },{cssClass:'sort-modal'});
    sortModal.present();
  }

  ionViewDidLoad() {
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
  openNotificationModal(){
    // let NotificationModal = this.modalCtrl.create(NotificationPage, { userId: 8675309 },{});
    // NotificationModal.present();
    this.navCtrl.push(NotificationPage)
  }
}
