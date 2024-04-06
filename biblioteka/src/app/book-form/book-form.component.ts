import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService, CreateBookDTO } from '../book.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  bookService: BookService;
  urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  bookForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(5),
    ]),
    ISBN: new FormControl('', [
      Validators.required,
      Validators.maxLength(13),
      Validators.minLength(13),
    ]),
    author: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
    ]),
    publisher: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlRegex),
    ]),
  });

  onSubmit() {
    this.bookService.addBook(this.bookForm.value as CreateBookDTO);
    console.log('Submitting...', this.bookForm.value);
  }
}
