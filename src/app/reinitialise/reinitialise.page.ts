import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {FirebaseApp} from 'firebase/app';

@Component({
  selector: 'app-reinitialise',
  templateUrl: './reinitialise.page.html',
  styleUrls: ['./reinitialise.page.scss'],
})
export class ReinitialisePage implements OnInit {
  user: any;
  user_conect: FirebaseApp;

  constructor(private auth: AngularFireAuth, private fire: AngularFirestore, private route: Router) { }

  ngOnInit() {
  }
  updatePass(pass){
    if(pass.value.old_pass!='' && pass.value.new_pass!='' && pass.value.conf_new!='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.userPassword == pass.value.old_pass){
              if(pass.value.new_pass == pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
                this.route.navigate(['login'])

              }else{
                console.log("le nouveau mot de passe et l'ancien sont different");
              }
            }else {
              console.log("Ancien mot de passe incorrecte");
            }
          });
        }else{
          console.log("non encore connecter");
        }
      })
    }else{
      console.log(" vous n'etes pas connecter");
    }
  }
}
