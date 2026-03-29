import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user!: UserModel;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  OnSelectUser() {
    this.select.emit(this.user.id);
  }
}
