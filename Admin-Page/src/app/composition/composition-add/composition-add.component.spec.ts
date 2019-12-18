import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionAddComponent } from './composition-add.component';

describe('CompositionAddComponent', () => {
  let component: CompositionAddComponent;
  let fixture: ComponentFixture<CompositionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
