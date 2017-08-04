
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
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

   
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