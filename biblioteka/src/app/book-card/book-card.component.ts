import { Component, Input } from '@angular/core';
import { Book } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  constructor(route: ActivatedRoute) {
    this.bookInput = {
      id: 1,
      title: 'Harry Potter i kamień filozoficzny',
      ISBN: '9788869183157',
      author: 'J.K.Rowling',
      publisher: 'Media Rodzina',
      image:
        'https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/harry-potter-i-kamien-filozoficzny-b-iext147531850.jpg',
    };
    route.params.subscribe((params) => {
      console.log(params['id']);
    });
  }

  @Input()
  bookInput: Book;
}
