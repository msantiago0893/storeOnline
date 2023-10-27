import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulAccountComponent } from './successful-account.component';

describe('SuccessfulAccountComponent', () => {
  let component: SuccessfulAccountComponent;
  let fixture: ComponentFixture<SuccessfulAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
