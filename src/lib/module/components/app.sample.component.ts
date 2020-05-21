import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  template: `
    <div>
      <h2>The Sample Component</h2>
    </div>
  `
})

export class SampleComponent implements OnInit {
  message: string;
  constructor() {
    this.message = '';
  }

  ngOnInit() {

  }

}
