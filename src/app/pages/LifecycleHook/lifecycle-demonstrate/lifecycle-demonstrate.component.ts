import { Component, Input, SimpleChanges } from '@angular/core';
import { Joke } from '../../../interface/joke';

@Component({
  selector: 'joke',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-demonstrate.component.html',
  styleUrl: './lifecycle-demonstrate.component.scss',
})
export class LifecycleDemonstrateComponent {
  @Input('joke') data!: Joke;

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data}`);

    for (let key in changes) {
      console.log(`${key} changed.
Current: ${changes[key].currentValue}.
Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
