import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceMessageDialogComponent } from './commerce-message-dialog.component';

describe('CommerceMessageDialogComponent', () => {
  let component: CommerceMessageDialogComponent;
  let fixture: ComponentFixture<CommerceMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
