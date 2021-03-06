import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Course } from '../course/course';

@Component({
  selector: 'page-outline',
  templateUrl: 'outline.html',
})
export class Outline {

  semester1: FirebaseListObservable<any[]>;
  semester2: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public af: AngularFire) {

                this.semester1 = af.database.list('/outline/semester1');
                this.semester2 = af.database.list('/outline/semester2');
  }

    goToOtherPage(code, title, description, hours) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Course, {code: code,
                               title: title,
                               description: description,
                               hours: hours});
    }


}
