import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact-component',
  template:`
     <div>
        <h2>The Contact Component</h2>
        <div>
           <strong>{{message}}</strong>
        </div>
     </div>
  `
})

export class ContactComponent implements OnInit {
  message: string;
  // inject the ActivatedRoute
  constructor(private act: ActivatedRoute) {
    this.message = 'This is Contact Component';
  }

  ngOnInit() {
    // subscribe to the route expression to read the RouteParameters
    // using ActivatedRoute
    // param --> This is an object that will contain all
    // parameters from the route expression
    this.act.params.subscribe((param)=> {
        this.message += param.id;
    });
  }

}
