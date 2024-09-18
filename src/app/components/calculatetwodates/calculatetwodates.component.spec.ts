import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatetwodatesComponent } from './calculatetwodates.component';

describe('CalculatetwodatesComponent', () => {
  let component: CalculatetwodatesComponent;
  let fixture: ComponentFixture<CalculatetwodatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatetwodatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatetwodatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
