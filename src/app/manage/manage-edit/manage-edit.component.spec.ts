import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEditComponent } from './manage-edit.component';

describe('ManageEditComponent', () => {
  let component: ManageEditComponent;
  let fixture: ComponentFixture<ManageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
