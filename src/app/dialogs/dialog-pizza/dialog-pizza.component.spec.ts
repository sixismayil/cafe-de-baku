import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPizzaComponent } from './dialog-pizza.component';

describe('DialogPizzaComponent', () => {
  let component: DialogPizzaComponent;
  let fixture: ComponentFixture<DialogPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
