import { Component, signal } from '@angular/core';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
  users = DUMMY_USERS;
} 
