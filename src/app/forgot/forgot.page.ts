import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor( private alerta:AlertController ) { }

async alert(){
  await this.alerta.create({
    header:"Demande envoyé !!!",
    message:"",
    buttons:[
      {
        text:"ok"
      }
    ]
  }).then(res =>res.present());
}

  ngOnInit() {
  }

}
