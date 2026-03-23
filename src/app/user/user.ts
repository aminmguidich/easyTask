import { Component, Input, Output, EventEmitter } from '@angular/core';


interface UserModel {  
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user!: UserModel;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  OnSelectUser() {
    this.select.emit(this.user.id);
  }
}
