import { Component, Input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  imports: [BookCardComponent, CommonModule],
})
export class BookListComponent {
  @Input() booksList: Book[] = [];
}
