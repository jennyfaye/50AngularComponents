import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojitrackerComponent } from './emojitracker.component';

describe('EmojitrackerComponent', () => {
  let component: EmojitrackerComponent;
  let fixture: ComponentFixture<EmojitrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojitrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojitrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
