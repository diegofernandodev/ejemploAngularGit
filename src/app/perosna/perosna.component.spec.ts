import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerosnaComponent } from './perosna.component';

describe('PerosnaComponent', () => {
  let component: PerosnaComponent;
  let fixture: ComponentFixture<PerosnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerosnaComponent]
    });
    fixture = TestBed.createComponent(PerosnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
