import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  bookForm = new FormGroup({
    title: new FormControl(''),
    isbn: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    image: new FormControl(''),
  });

  onSubmit() {}
}
