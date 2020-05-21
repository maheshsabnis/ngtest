import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template:`
     <div>
        <h2>The Home Component</h2>
        <div>
           <strong>{{message}}</strong>
        </div>
     </div>
  `
})

export class HomeComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is Home Component';
  }

  ngOnInit() {

  }

}
