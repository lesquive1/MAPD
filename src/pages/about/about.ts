import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 semester1: FirebaseListObservable<any[]>;
  semester2: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public af: AngularFire) {

                this.semester1 = af.database.list('/faculty/semester1');
                this.semester2 = af.database.list('/faculty/semester2');


  }

}
