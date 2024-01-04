import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPurchasesFifthPage } from './empty-purchases-fifth.page';

describe('EmptyPurchasesFifthPage', () => {
  let component: EmptyPurchasesFifthPage;
  let fixture: ComponentFixture<EmptyPurchasesFifthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPurchasesFifthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPurchasesFifthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
