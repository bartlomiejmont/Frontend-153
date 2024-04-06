import { Component, EventEmitter, Output } from '@angular/core';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  bookService: BookService;

  @Output() search = new EventEmitter<Book[]>();

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  handleSearch(searchEvent: Event) {
    const value = (searchEvent.target as HTMLInputElement).value;
    const books = this.bookService.searchBooks(value);
    this.search.emit(books);
  }
}
