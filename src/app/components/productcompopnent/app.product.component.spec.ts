import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './app.product.component';
import { Product } from 'src/app/models/app.product';
import { FormsModule } from '@angular/forms';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let button: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //  initialize selector, template/templateUrl, etc. properties of component
    fixture = TestBed.createComponent(ProductComponent);
     //  Get the Component Instance
    component = fixture.componentInstance;
    // Perform initial Data binding, provide an initial execution for ngModel
    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the sales tax', () => {
     const prd = new Product(0, '', 0, '');
     prd.Price = 3000;
     component.product = prd;
     // get the DOM element for watch (databinding, change event)
     const nativeElement = fixture.nativeElement;
     // get the element to be tested for the clieck event
     button = nativeElement.querySelector('.btn-success');
     const eventType = button.dispatchEvent(new Event('click'));
     fixture.detectChanges();
     expect(nativeElement.querySelector('input[disabled]').value).toEqual('600');
  });
});
