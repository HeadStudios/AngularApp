import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWalletThirdPage } from './empty-wallet-third.page';

describe('EmptyWalletThirdPage', () => {
  let component: EmptyWalletThirdPage;
  let fixture: ComponentFixture<EmptyWalletThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyWalletThirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyWalletThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
