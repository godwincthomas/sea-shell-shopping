import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAssociationRbyPageComponent } from './our-association-rby-page.component';

describe('OurAssociationRbyPageComponent', () => {
  let component: OurAssociationRbyPageComponent;
  let fixture: ComponentFixture<OurAssociationRbyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAssociationRbyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAssociationRbyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
