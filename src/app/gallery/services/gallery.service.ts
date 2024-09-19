import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}