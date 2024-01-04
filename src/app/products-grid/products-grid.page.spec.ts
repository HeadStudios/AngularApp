import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridPage } from './products-grid.page';

describe('ProductsGridPage', () => {
  let component: ProductsGridPage;
  let fixture: ComponentFixture<ProductsGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
