import { Component, effect, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { type Book } from '../../models/book';
import { BookCardComponent } from '../book-card/book-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ul[book-list]',
  imports: [NgFor, BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books: Book[] = []

  constructor(private bookService: BookService) {
    effect(() => {
      this.books = this.bookService.books()
    })
  }



}
