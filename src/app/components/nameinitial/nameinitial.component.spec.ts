import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameinitialComponent } from './nameinitial.component';

describe('NameinitialComponent', () => {
  let component: NameinitialComponent;
  let fixture: ComponentFixture<NameinitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameinitialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
