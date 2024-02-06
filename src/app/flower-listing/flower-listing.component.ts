import { Component } from '@angular/core';
import { PageTitleComponent } from '../components/page-title/page-title.component';

@Component({
  selector: 'app-flower-listing',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './flower-listing.component.html',
  styleUrl: './flower-listing.component.scss',
})
export class FlowerListingComponent {}
