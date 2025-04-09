import { Component, effect, output, signal } from '@angular/core';
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
  bookSelect = output<Book >()

  constructor(public bookService: BookService) {

  }

  cardSelected(book: Book ) {
    if (book) {
      console.log(book.title)
      this.bookSelect.emit(book)
    }
  }

}
