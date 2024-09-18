import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbertowordsComponent } from './numbertowords.component';

describe('NumbertowordsComponent', () => {
  let component: NumbertowordsComponent;
  let fixture: ComponentFixture<NumbertowordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbertowordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbertowordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
