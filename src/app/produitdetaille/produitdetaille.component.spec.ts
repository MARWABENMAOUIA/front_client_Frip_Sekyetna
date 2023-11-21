import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitdetailleComponent } from './produitdetaille.component';

describe('ProduitdetailleComponent', () => {
  let component: ProduitdetailleComponent;
  let fixture: ComponentFixture<ProduitdetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitdetailleComponent]
    });
    fixture = TestBed.createComponent(ProduitdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
