import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorDialogComponent } from './inspector-dialog.component';

describe('InspectorDialogComponent', () => {
  let component: InspectorDialogComponent;
  let fixture: ComponentFixture<InspectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
