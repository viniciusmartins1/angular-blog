import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Post as TPost } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class Post {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<TPost[]>('http://localhost:3000/posts');
  }

  postMessage(post: TPost) {
    return this.http.post('http://localhost:3000/posts', post);
  }
}
