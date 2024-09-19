import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostServiceService } from '../services/post-service.service';
import { Post } from '../models/IPost';
import { Observable } from 'rxjs';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-post-firestore',
  templateUrl: './post-firestore.page.html',
  styleUrls: ['./post-firestore.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonItem, IonList]
})
export class PostFirestorePage implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(private postService: PostServiceService) {}

  ngOnInit() {
    this.posts$ = this.postService.getActivePosts();
    console.log('Data in component:', this.posts$);
  }

}
