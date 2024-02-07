import { Component } from '@angular/core';
import { Joke } from '../../../interface/joke';
import { LifecycleDemonstrateComponent } from '../lifecycle-demonstrate/lifecycle-demonstrate.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [LifecycleDemonstrateComponent, CommonModule],
  templateUrl: './list-lifecycle.component.html',
  styleUrl: './list-lifecycle.component.scss',
})
export class ListLifecycleComponent {
  jokes: Joke[] = [];

  addJoke() {
    this.jokes.unshift(
      new Joke(
        'What did the cheese say when it looked in the mirror',
        'Hello-me (Halloumi)'
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
  }
}
