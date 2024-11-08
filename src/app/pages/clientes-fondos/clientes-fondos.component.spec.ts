import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFondosComponent } from './clientes-fondos.component';

describe('ClientesFondosComponent', () => {
  let component: ClientesFondosComponent;
  let fixture: ComponentFixture<ClientesFondosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesFondosComponent]
    });
    fixture = TestBed.createComponent(ClientesFondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
