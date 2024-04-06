import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book, BookService } from './book.service';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    BookFormComponent,
    SearchComponent,
    BookListComponent,
  ],
})
export class AppComponent {
  booksList: Book[] = [];

  constructor(bookService: BookService) {
    this.booksList = bookService.listAllBooks();
  }

  handleSearchEvent(books: Book[]) {
    this.booksList = books;
  }
}
