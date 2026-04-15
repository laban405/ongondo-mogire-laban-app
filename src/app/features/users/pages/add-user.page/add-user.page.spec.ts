import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPage } from './add-user.page';

describe('AddUserPage', () => {
  let component: AddUserPage;
  let fixture: ComponentFixture<AddUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
