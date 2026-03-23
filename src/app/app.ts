import { Component, signal } from '@angular/core';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  
} 
