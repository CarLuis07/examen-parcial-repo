import { Injectable } from '@angular/core';
import { Firestore, collectionData, query, where, orderBy, limit, CollectionReference } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.postCollection = collection(this.firestore, 'User');
  }

  getActivePosts(): Observable<Post[]> {
    const q = query(
      this.postCollection,
      where('active', '==', true),
      orderBy('id', 'desc'),
      limit(3)
    );
    const posts$ = collectionData(q, { idField: 'id' }) as Observable<Post[]>;
    posts$.subscribe(data => {
      console.log('Data from Firestore:', data);
    });
    return posts$;
  }
}