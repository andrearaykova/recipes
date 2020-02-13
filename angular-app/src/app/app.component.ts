import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB3UHe62FcGSX0JOla65AVlNeD7GkTZDRE",
      authDomain: "recipes-28a38.firebase.com"
    })
  }

}
