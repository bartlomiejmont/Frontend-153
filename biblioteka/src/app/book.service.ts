import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  ISBN: string;
  author: string;
  publisher: string;
  image?: string;
}

export type CreateBookDTO = Omit<Book, 'id'>;

let booksDatabase: Book[] = [
  {
    id: 1,
    title: 'Harry Potter i kamień filozoficzny',
    ISBN: '9788869183157',
    author: 'J.K.Rowling',
    publisher: 'Media Rodzina',
    image:
      'https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/harry-potter-i-kamien-filozoficzny-b-iext147531850.jpg',
  },
  {
    id: 2,
    title: 'Pan Tadeusz',
    ISBN: '9780598183828',
    author: 'Adam Mickiewicz',
    publisher: 'Wydawnictwo Dragon',
    image:
      'https://wolnelektury.pl/media/book/cover_clean/pan-tadeusz_f2oLPwc.jpg',
  },
  {
    id: 3,
    title: 'Dolina szpiegów',
    ISBN: '9788382527308',
    author: 'Robert Michniewicz',
    publisher: 'Czarna Owca',
    image:
      'https://s.lubimyczytac.pl/upload/books/5099000/5099967/1126423-352x500.jpg',
  },
  {
    id: 4,
    title: 'Trenerka',
    ISBN: '9788367133210',
    author: 'Agnieszka Karacka',
    publisher: 'Moc Media',
    image:
      'https://s.lubimyczytac.pl/upload/books/5110000/5110232/1141064-352x500.jpg',
  },
  {
    id: 5,
    title: 'TOPR. O psie, który został ratownikiem',
    ISBN: '9788383521039',
    author: 'Beata Sabała-Zielińska',
    publisher: 'Prószyński i S-ka',
    image:
      'https://s.lubimyczytac.pl/upload/books/5095000/5095067/1114260-352x500.jpg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  public listAllBooks(): Book[] {
    return booksDatabase;
  }

  public searchBooks(search: string): Book[] {
    return booksDatabase.filter((b) => b.title.includes(search));
  }

  public getBookById(id: number): Book | undefined {
    const book: Book | undefined = booksDatabase.find((b) => b.id === id);
    if (!book) {
      // jeśli nie ma ksiązki
      console.log(`Not found book with id ${id}`);
    }
    return book;
  }

  public removeBook(id: number): void {
    const newBooks = booksDatabase.filter((book) => book.id !== id);
    booksDatabase = newBooks;
  }

  public addBook(book: CreateBookDTO): Book {
    const generatedId = booksDatabase[booksDatabase.length - 1].id + 1;
    const newBook = { ...book, id: generatedId };
    booksDatabase.push(newBook);
    return newBook;
  }

  public updateBook(id: number, book: Book): Book | void {
    const bookIndex = booksDatabase.findIndex((book) => book.id === id);
    if (bookIndex === -1 || book.id !== id) {
      return;
    }
    booksDatabase[bookIndex] = book;
    return book;
  }
}
