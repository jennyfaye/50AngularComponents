import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofartistnameComponent } from './listofartistname.component';

describe('ListofartistnameComponent', () => {
  let component: ListofartistnameComponent;
  let fixture: ComponentFixture<ListofartistnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListofartistnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofartistnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
