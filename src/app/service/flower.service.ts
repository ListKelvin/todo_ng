import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flower } from '../interface/flower';
let counter = 0;
@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  id: number;
  url = 'https://653ca845d5d6790f5ec82461.mockapi.io/api/flowerManagement';
  constructor(private http: HttpClient) {
    counter++;

    this.id = counter;
  }

  async getAllFlowers(): Promise<Flower[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  saveCourse(course: Flower) {
    const headers = new HttpHeaders().set('X-Auth', 'userId');

    return this.http.put(`/api/courses/${course.id}`, course, { headers });
  }
}
