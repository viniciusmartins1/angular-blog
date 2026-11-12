import { Component, signal } from '@angular/core';
import { Post as PostService } from '../service/post';
import { Post } from '../model/Post';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [FormsModule, DatePipe],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  listPost = signal<Post[]>([]);
  post: Post = { id: 0, message: '', name: '', createdDate: new Date() };

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.listPost.set(data);
      },
    });
  }

  handleSubmitComment() {
    this.postService.postMessage(this.post).subscribe({
      next: () => {
        this.getPosts();
      },
    });
  }
}
