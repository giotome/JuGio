import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovapastaComponent } from './novapasta.component';

describe('NovapastaComponent', () => {
  let component: NovapastaComponent;
  let fixture: ComponentFixture<NovapastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovapastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovapastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
