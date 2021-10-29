import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;

  constructor(
    private fire : AngularFirestore,
    private auth:AuthService,
    private router: Router  
    ) { }
    logout()
    {
      this.auth.singOut();
    }

  ngOnInit() {
    this.getData();
  }
  async getData(){
    this.itemsCollect = this.fire.collection('user'); //donnee la collection user à itemCollect
    this.items = this.itemsCollect.valueChanges();
    console.log(this.items);
  }

}

