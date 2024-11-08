import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFondoComponent } from './edit-fondo.component';

describe('EditFondoComponent', () => {
  let component: EditFondoComponent;
  let fixture: ComponentFixture<EditFondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFondoComponent]
    });
    fixture = TestBed.createComponent(EditFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
