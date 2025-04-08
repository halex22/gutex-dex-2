import { Component, inject, input, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { effect } from '@angular/core';
import { type Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  book = signal<Book | null>(null)
  bookService = inject(BookService)

  constructor() {
    effect(() => {
      this.book.set(this.bookService.getBookById())
    })
  }
}
