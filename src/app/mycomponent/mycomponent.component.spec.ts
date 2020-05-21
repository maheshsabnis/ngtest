import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentComponent } from './mycomponent.component';

describe('MycomponentComponent', () => {
  let component: MycomponentComponent;
  let fixture: ComponentFixture<MycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const x = 10;
    const y = 20;
    let expected =  30;
    let actual = component.add(x,y);

    expect(expected).toEqual(actual);
  });
});
