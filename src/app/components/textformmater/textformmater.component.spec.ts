import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextformmaterComponent } from './textformmater.component';

describe('TextformmaterComponent', () => {
  let component: TextformmaterComponent;
  let fixture: ComponentFixture<TextformmaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextformmaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextformmaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
