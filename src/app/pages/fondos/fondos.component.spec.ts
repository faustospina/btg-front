import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosComponent } from './fondos.component';

describe('FondosComponent', () => {
  let component: FondosComponent;
  let fixture: ComponentFixture<FondosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondosComponent]
    });
    fixture = TestBed.createComponent(FondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
