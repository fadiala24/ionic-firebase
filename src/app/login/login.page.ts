import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
  email:string;
  password:string;

  constructor(
    private auth:AuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  login()
  {
      if(this.email && this.password)
      {
          this.auth.signIn(this.email, this.password);
            
          
      } else 
      {
        this.toast('veillez saisir email & mot de passe', 'en chargement');
      }
  }
    async  toast(message, status)
    {
       const toast = await this.toastr.create({
         message:message,
         color:"secondary",
         position:'top',
         duration:2000 
       });
       toast.present();
    }

}
