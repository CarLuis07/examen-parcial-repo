import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonRow, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { GalleryService } from '../../services/gallery.service';
import { Photo } from '../../models/photo.model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: true,

  imports: [IonLabel, IonAvatar, IonItem, IonList, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid],
})
export class GalleryPage implements OnInit {
  photos: Photo[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }
}