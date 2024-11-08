import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFondoComponent } from './add-fondo.component';

describe('AddFondoComponent', () => {
  let component: AddFondoComponent;
  let fixture: ComponentFixture<AddFondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFondoComponent]
    });
    fixture = TestBed.createComponent(AddFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
