import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLifecycleComponent } from './list-lifecycle.component';

describe('ListLifecycleComponent', () => {
  let component: ListLifecycleComponent;
  let fixture: ComponentFixture<ListLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLifecycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
