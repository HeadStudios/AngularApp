import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTilesPage } from './grid-tiles.page';

describe('GridTilesPage', () => {
  let component: GridTilesPage;
  let fixture: ComponentFixture<GridTilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
