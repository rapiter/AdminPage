import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionDetailsComponent } from './composition-details.component';

describe('CompositionDetailsComponent', () => {
  let component: CompositionDetailsComponent;
  let fixture: ComponentFixture<CompositionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
