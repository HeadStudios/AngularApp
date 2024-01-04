import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughAltPage } from './walkthrough-alt.page';

describe('WalkthroughAltPage', () => {
  let component: WalkthroughAltPage;
  let fixture: ComponentFixture<WalkthroughAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
