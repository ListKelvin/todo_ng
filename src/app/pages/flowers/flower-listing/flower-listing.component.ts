import { Component, Input, inject } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { Flower } from '../../../interface/flower';
import { FlowerService } from '../../../service/flower.service';
import { FlowerCardComponent } from '../../../components/flower-card/flower-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-listing',
  standalone: true,
  imports: [PageTitleComponent, FlowerCardComponent, CommonModule],
  templateUrl: './flower-listing.component.html',
  styleUrl: './flower-listing.component.scss',
})
export class FlowerListingComponent {
  flowerList: Flower[] = [];
  flowerService: FlowerService = inject(FlowerService);
  filteredFlowerList: Flower[] = [];
  constructor() {
    this.flowerService.getAllFlowers().then((flowerList: Flower[]) => {
      this.flowerList = flowerList;
      this.filteredFlowerList = flowerList;
    });
  }
  filterResults(text: string, event: any) {
    event.preventDefault();
    if (!text) {
      this.filteredFlowerList = this.flowerList;
    }
    this.filteredFlowerList = this.flowerList.filter((flower) =>
      flower?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
