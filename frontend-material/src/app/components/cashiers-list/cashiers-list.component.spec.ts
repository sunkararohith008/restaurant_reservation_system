import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashiersListComponent } from './cashiers-list.component';

describe('CashiersListComponent', () => {
  let component: CashiersListComponent;
  let fixture: ComponentFixture<CashiersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashiersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
