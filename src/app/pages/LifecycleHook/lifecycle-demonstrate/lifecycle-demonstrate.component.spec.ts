import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleDemonstrateComponent } from './lifecycle-demonstrate.component';

describe('LifecycleDemonstrateComponent', () => {
  let component: LifecycleDemonstrateComponent;
  let fixture: ComponentFixture<LifecycleDemonstrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleDemonstrateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleDemonstrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
