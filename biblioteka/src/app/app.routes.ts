import { Routes } from '@angular/router';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'book', component: BookCardComponent },
  { path: 'book/:id', component: BookCardComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];
