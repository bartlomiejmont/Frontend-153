import { Component, Input } from '@angular/core';
import { Book } from '../book.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  @Input()
  bookInput!: Book;
}
