import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCitasComponent } from './show-citas.component';

describe('ShowCitasComponent', () => {
  let component: ShowCitasComponent;
  let fixture: ComponentFixture<ShowCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
