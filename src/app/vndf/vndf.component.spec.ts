import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VndfComponent } from './vndf.component';

describe('VndfComponent', () => {
  let component: VndfComponent;
  let fixture: ComponentFixture<VndfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VndfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VndfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
