import { Component, input, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'li[book-card]',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  title = input.required<string>()
  id = input.required<number>()
  cover = input.required<string>()
  bookService = inject(BookService)

  onBookClick() {
    this.bookService.updateSelectedBookId(this.id())
  }
}
