
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { CreateQuestionsPage } from "../create-questions/create-questions";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'lecturer-view.html'
})
export class LecturerViewPage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthServiceProvider) {
<<<<<<< HEAD
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

   
=======
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
>>>>>>> 2532f8b52d2811b0faf304676f459f660a3df46e
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('CreateQuestionsPage')
    });
  }

    nextPage(){


      this.nav.push(CreateQuestionsPage);
    }

}