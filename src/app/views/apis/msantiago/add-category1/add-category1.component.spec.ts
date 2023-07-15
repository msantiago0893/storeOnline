import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategory1Component } from './add-category1.component';

describe('AddCategory1Component', () => {
  let component: AddCategory1Component;
  let fixture: ComponentFixture<AddCategory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategory1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
