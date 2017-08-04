
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'lecturer-view.html'
})
export class LecturerViewPage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthServiceProvider) {
    console.log("hi1---------------------:",auth, "end-------------");

    let info;
    this.auth.getUserInfo().then((data) => {
      if (data != null) info = JSON.parse(data);
      else info = null;
    }).then(()=>{
      console.log("hi2---------------------:",info, "end-------------");
      this.username = info['name'];
      this.email = info['email'];
    });

    console.log("hi3---------------------:",info, "end-------------");
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('CreateQuestionsPage')
    });
  }
}