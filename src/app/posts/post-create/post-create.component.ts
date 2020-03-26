import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = ''
  newPost = '';
  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = this.enteredValue;
  }
}
