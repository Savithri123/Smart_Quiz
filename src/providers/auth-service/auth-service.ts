import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Storage } from '@ionic/storage';
    


export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {

  currentUser: User;

  constructor(private storage: Storage) {
    this.storage = storage;
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");

        this.currentUser = new User('Savithri', 'savithri@nsbm.lk');
        this.storage.set("currentUser", JSON.stringify(this.currentUser));

        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() {
    return this.storage.get('currentUser');
  }

  public getUserInfoo(callback) {
    let user;
    this.storage.get('currentUser').then((data) => {
      user = data;
      console.log("data",data);
      callback(null, user);
    });
    console.log("user=============",user);
  }

  public getUserrInfo() : User {
    this.storage.get('currentUser').then((data) => {
      if (data != null) this.currentUser = JSON.parse(data);
      else this.currentUser = null;
    });
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}

  
    
  
   


