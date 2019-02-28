import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-tab',
  templateUrl: 'notification-tab.html',
})
export class NotificationTabPage {
  notificationServiceArray:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notificationServiceArray = [
        {
          notification:{
              notificationTitle:"Job Published",
              notificationDetail:"Payments of Order# 121 is pending untill confirmation",
              notificationTime:"5 mins ago"
            },
            Inbox:{
              senderName:'Abdullah Al-Qahtani',
              sendTime:'Hello, I want to ask you about the service that you prov...',
              message:'Just now'
            }
      },
      {
        notification:{
            notificationTitle:"Payments",
            notificationDetail:"Payments of Order# 121 is pending untill confirmation",
            notificationTime:"10 mins ago"
          },
          Inbox:{
            senderName:'Abdullah Al-Qahtani',
            sendTime:'Hello, I want to ask you about the service that you prov...',
            message:'Just now'
          }
    },
    {
      notification:{
          notificationTitle:"Job Published",
          notificationDetail:"Payments of Order# 121 is pending untill confirmation",
          notificationTime:"5 mins ago"
        },
        Inbox:{
          senderName:'Payments',
          sendTime:'Hello, I want to ask you about the service that you prov...',
          message:'Just now'
        }
  },
    {
      notification:{
          notificationTitle:"Quotation Rejected",
          notificationDetail:"Your Qoutation is rejected for request# 12143",
          notificationTime:"5 days ago"
        },
        Inbox:{
          senderName:'Abdullah Al-Qahtani',
          sendTime:'Hello, I want to ask you about the service that you prov...',
          message:'Just now'
        }

  },
  {
    notification:{
        notificationTitle:"Request Rejected",
        notificationDetail:"Payments of Order# 121 is pending untill confirmation",
        notificationTime:"5 mins ago"
      },
      Inbox:{
        senderName:'Abdullah Al-Qahtani',
        sendTime:'Hello, I want to ask you about the service that you prov...',
        message:'Just now'
      }
},
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationTabPage');
  }

}
