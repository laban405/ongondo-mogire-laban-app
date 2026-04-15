import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LognPage } from './logn.page';

describe('LognPage', () => {
  let component: LognPage;
  let fixture: ComponentFixture<LognPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LognPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LognPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
