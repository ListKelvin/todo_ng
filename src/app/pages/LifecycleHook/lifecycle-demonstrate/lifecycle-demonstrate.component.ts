import { Component, Input } from '@angular/core';
import { Joke } from '../../../interface/joke';

@Component({
  selector: 'app-lifecycle-demonstrate',
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

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
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
