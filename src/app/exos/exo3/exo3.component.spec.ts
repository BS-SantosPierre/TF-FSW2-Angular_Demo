import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3Component } from './exo3.component';

describe('Exo3Component', () => {
  let component: Exo3Component;
  let fixture: ComponentFixture<Exo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
