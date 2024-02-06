import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerListingComponent } from './flower-listing.component';

describe('FlowerListingComponent', () => {
  let component: FlowerListingComponent;
  let fixture: ComponentFixture<FlowerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
