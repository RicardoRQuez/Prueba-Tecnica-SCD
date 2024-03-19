import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInfoComponent } from './listado-info.component';

describe('ListadoInfoComponent', () => {
  let component: ListadoInfoComponent;
  let fixture: ComponentFixture<ListadoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
