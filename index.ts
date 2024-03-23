import { Book, BookService } from "./services/BookService";

const bookService = new BookService();

let allBooks: Book[] = bookService.listAllBooks();
console.log(allBooks);

const firstBook = bookService.getBookById(1);
console.log(firstBook);

bookService.addBook({ title: "do usuniecia" });
allBooks = bookService.listAllBooks();
console.log(allBooks);

bookService.removeBook(3);
allBooks = bookService.listAllBooks();
console.log(allBooks);

bookService.updateBook(2, { id: 1, title: "Harry" });
allBooks = bookService.listAllBooks();
console.log(allBooks);
