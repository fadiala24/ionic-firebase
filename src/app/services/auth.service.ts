import { Injectable } from '@angular/core';
import {User} from '../models/user';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import{ AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import{LoadingController, ToastController } from '@ionic/angular';
import { switchMap} from 'rxjs/operators';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
    user$: Observable<User>;
    user:User;

  constructor
  (
      private afs: AngularFirestore,
      private afauth: AngularFireAuth,
      private router:Router,
      private LoadingCtrl: LoadingController,
      private toaster: ToastController
  ) {
    this.user$ = this.afauth.authState
    .pipe(
      switchMap(user =>{
        if(user){
          return this.afs.doc<User>('user/${user.uid}').valueChanges();
        } else{
          return of(null);
        }
      })

    )
   } // fin du constructeur

   async signIn(email, password)
   {
     const loading = await this.LoadingCtrl.create({
       message: 'En cours de Connection..',
       spinner: 'crescent',
       showBackdrop: true
     });
     loading.present();
     this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
     .then(() => {
       this.afauth.signInWithEmailAndPassword(email, password).then((data)=>
       {
          if(!data.user.emailVerified)
          {
            loading.dismiss();
            this.toast(' Veuillez verifier votre adresse email','Attention');
            this.afauth.signOut();
          }else{
            loading.dismiss();
            this.router.navigate(['/accueil']);
          }
       })
       .catch(error => {
         loading.dismiss();
         this.toast(error.message, 'danger');
       })
      })
       .catch(error => {
         loading.dismiss();
          this.toast(error.message, 'danger');
          
       });
     
   } // fin de la partie de connexion

  async singOut()
   {
     const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
     });
     loading.present();
     this.afauth.signOut()
     .then(() =>{
        loading.dismiss();
        this.router.navigate(['/login']);
     })
   } // fin de la partie deconnexion

  async toast(message, status)
   {
      const toast = await this.toaster.create({
        message: message,
        color: status,
        position: 'top',
        duration:2000
      });
        toast.present();
   } // fin de toast

}
