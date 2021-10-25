import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any | undefined;

  isupdate = false;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.get().subscribe((response) => {
      this.posts = response;
      console.log(this.posts);
    });
  }
  createPoste(addPostForm: NgForm) {
    let post = {
      title: addPostForm.value.title,
      body: addPostForm.value.body,
      userId: addPostForm.value.userId,
    };
    this.service.create(post).subscribe((response) => {
      console.log(response);
      this.posts.splice(0, 0, post);
    });
  }
  updatePost(updatePostForm: NgForm, post: any) {
    post.title = updatePostForm.value.title;
    post.body = updatePostForm.value.body;
    post.userId = updatePostForm.value.userId;
    this.service.update(post).subscribe((response) => {
      let index = this.posts.indexOf(post);
      console.log(index);
      this.posts[index] = post;
      console.log(response);
    });
  }
  deletePost(post: any) {
    this.service.delete(post).subscribe((response) => {
      let index = this.posts.indexOf(post);
      console.log(index);
      this.posts.splice(index, 1);
      console.log(response);
    });
  }
}
