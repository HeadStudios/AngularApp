import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAltPage } from './wallet-alt.page';

describe('WalletAltPage', () => {
  let component: WalletAltPage;
  let fixture: ComponentFixture<WalletAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
