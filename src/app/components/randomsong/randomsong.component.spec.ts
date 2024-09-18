import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomsongComponent } from './randomsong.component';

describe('RandomsongComponent', () => {
  let component: RandomsongComponent;
  let fixture: ComponentFixture<RandomsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomsongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
