import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './components/app.sample.component';

const routes: Routes = [
  {path:'', component:SampleComponent}
];

@NgModule({
  declarations: [SampleComponent],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
  // forChild() method will load all routes as child roues in the Lazy Loaded Module
})
export class LazyModule {}
