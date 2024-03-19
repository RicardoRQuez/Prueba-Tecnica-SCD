import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetalleComponent } from './info-detalle.component';

describe('InfoDetalleComponent', () => {
  let component: InfoDetalleComponent;
  let fixture: ComponentFixture<InfoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
