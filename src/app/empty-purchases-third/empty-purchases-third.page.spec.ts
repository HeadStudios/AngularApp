import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPurchasesThirdPage } from './empty-purchases-third.page';

describe('EmptyPurchasesThirdPage', () => {
  let component: EmptyPurchasesThirdPage;
  let fixture: ComponentFixture<EmptyPurchasesThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPurchasesThirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPurchasesThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
