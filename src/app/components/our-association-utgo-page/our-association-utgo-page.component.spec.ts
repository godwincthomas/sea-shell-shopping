import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAssociationUtgoPageComponent } from './our-association-utgo-page.component';

describe('OurAssociationUtgoPageComponent', () => {
  let component: OurAssociationUtgoPageComponent;
  let fixture: ComponentFixture<OurAssociationUtgoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAssociationUtgoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAssociationUtgoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
