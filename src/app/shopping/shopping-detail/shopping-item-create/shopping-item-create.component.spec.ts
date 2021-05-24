import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemCreateComponent } from './shopping-item-create.component';

describe('ShoppingItemCreateComponent', () => {
  let component: ShoppingItemCreateComponent;
  let fixture: ComponentFixture<ShoppingItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingItemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
