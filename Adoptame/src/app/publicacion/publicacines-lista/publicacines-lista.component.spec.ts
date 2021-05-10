import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacinesListaComponent } from './publicacines-lista.component';

describe('PublicacinesListaComponent', () => {
  let component: PublicacinesListaComponent;
  let fixture: ComponentFixture<PublicacinesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacinesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacinesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
