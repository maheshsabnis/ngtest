import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-component',
  template:`
     <div>
        <h2>The About Component</h2>
        <div>
           <strong>{{message}}</strong>
        </div>
        <br/>
        <input type="text" [(ngModel)]="id"/>
        <input type="button" value="Navigate to Contact"
         (click)="navigateToContact()"/>
         <hr/>
         <a [routerLink]="['product']">Products</a>
         <br/>
         <router-outlet></router-outlet>
     </div>
  `
})

export class AboutComponent implements OnInit {
  message: string;
  id: number;
  // inject the Router class
  constructor(private router: Router) {
    this.message = 'This is About Component';
    this.id = 0;
  }

  navigateToContact(): void {
    // passing 'id' as a route parameter
    this.router.navigate(['contact', this.id]);
  }

  ngOnInit() {

  }

}
