import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.url);
  }
  create(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  update(post: any) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }
  delete(post: any) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
