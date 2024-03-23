export interface Book {
  id: number;
  title: string;
}

export type CreateBookDTO = Omit<Book, "id">;

let books: Book[] = [
  { id: 1, title: "Harry potter" },
  { id: 2, title: "Pan Tadeusz" },
];

export class BookService {
  public listAllBooks(): Book[] {
    return books;
  }

  public getBookById(id: number): Book | undefined {
    const book: Book | undefined = books.find((b) => b.id === id);
    if (!book) {
      // jeśli nie ma ksiązki
      console.log(`Not found book with id ${id}`);
    }
    return book;
  }

  public removeBook(id: number): void {
    const newBooks = books.filter((book) => book.id !== id);
    books = newBooks;
  }

  public addBook(book: CreateBookDTO): Book {
    const generatedId = books[books.length - 1].id + 1;
    const newBook = { ...book, id: generatedId };
    books.push(newBook);
    return newBook;
  }

  public updateBook(id: number, book: Book): Book | void {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1 || book.id !== id) {
      return;
    }
    books[bookIndex] = book;
    return book;
  }
}
