import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Flower } from '../../interface/flower';

@Component({
  selector: 'flower-card',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './flower-card.component.html',
  styleUrl: './flower-card.component.scss',
})
export class FlowerCardComponent implements OnInit {
  @Input() flower!: Flower;

  ngOnInit() {
    console.log('flower card initialized');
  }
}
