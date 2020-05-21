import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template:`
     <div>
        <h2>The Main Component</h2>
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <a [routerLink]="['']">Home</a>
            </td>
            <td>
              <a [routerLink]="['about']">About</a>
            </td>
            <td>
              <a [routerLink]="['contact', id]">Contact</a>
            </td>
            <td>
              <a [routerLink]="['lazy']">Lazy Module</a>
            </td>
          </tr>
        </table>
        <hr/>
        <router-outlet></router-outlet>
     </div>
  `
})

export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 300;
  }

  ngOnInit() {

  }

}
