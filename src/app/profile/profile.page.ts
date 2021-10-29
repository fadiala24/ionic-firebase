import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  constructor(
    private route: Router, 
    private auth: AngularFireAuth, 
    private fire: AngularFirestore
  ) { 

  this.auth.authState.subscribe(auth =>{
    if(auth){
      this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
        this.user = result; 
      
      });
    } else{
      console.log(this.user);
    }
  })
}
  ngOnInit(): void {
   
  }

}
