import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectSingleViewComponent } from './product-select-single-view.component';

describe('ProductSelectSingleViewComponent', () => {
  let component: ProductSelectSingleViewComponent;
  let fixture: ComponentFixture<ProductSelectSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
