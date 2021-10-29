import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit 
{
  name: string;
  prenom: string;
  phone: string;
  email: string;
  password: string;


  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }
    async Registre()
    {
        if(this.prenom && this.name  && this.phone && this.email && this.password)
        {
          const loading = await this.loadingCtrl.create({
            message: 'En cours de Traitement ...',
            spinner:'crescent',
            showBackdrop: true
          });

          loading.present();
          this.afauth.createUserWithEmailAndPassword(this.email, this.password)
          .then((data)=>{
            data.user.sendEmailVerification();
             this.afs.collection('user').doc(data.user.uid).set({
              'userId': data.user.uid,
              'userPrenom': this.prenom,
              'userName': this.name,
              'userPhone': this.phone,
              'userEmail': this.email,
              'userPassword': this.password,
              'createdAt': Date.now()
            })
            .then(() => {
              loading.dismiss();
               this.toast('Inscription effectué avec', 'Succes');
               this.router.navigate(['/login']);
            })
            .catch(error => {
              loading.dismiss();
                    this.toast(error.message, 'danger');
            })
          })
          .catch(error => {
            loading.dismiss();
            this.toast(error.message, 'danger');
          })
        } else{
          this.toast('Please veillez renseigner les champs', 'en chargement');
        }
    }// fin de la partie inscription

    async toast(message, status)
    {
      const toast=await this.toastr.create({
        message: message,
        color: "secondary",
        position: 'top',
        duration:2000
      });
      toast.present();

    } // fin de la partie toast
}
