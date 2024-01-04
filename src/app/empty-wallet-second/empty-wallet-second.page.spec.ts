import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWalletSecondPage } from './empty-wallet-second.page';

describe('EmptyWalletSecondPage', () => {
  let component: EmptyWalletSecondPage;
  let fixture: ComponentFixture<EmptyWalletSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyWalletSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyWalletSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
