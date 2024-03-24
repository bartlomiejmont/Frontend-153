import { Component, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from './book-card/book-card.component';
import { Book, BookService } from './book.service';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FormsModule,
    BookCardComponent,
    CommonModule,
    BookFormComponent,
  ],
})
export class AppComponent {
  constructor(bookService: BookService) {
    this.booksList = bookService.listAllBooks();
    this.bookService = bookService;
  }
  booksList: Book[] = [];
  bookService: BookService;

  handleSearch(searchEvent: Event) {
    const value = (searchEvent.target as HTMLInputElement).value;
    this.booksList = this.bookService.searchBooks(value);
  }
}
