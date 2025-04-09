import { Component, input, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'li[book-card]',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  title = input('',{transform: (title:string) => this.resizeTitle(title, 8)})
  id = input.required<number>()
  cover = input.required<string>()
  bookService = inject(BookService)

  resizeTitle(title: string, maxNumber: number):string {
    const wordsArray = title.split(' ')
    const resizedArray = wordsArray.slice(0, maxNumber)
    return resizedArray.join(' ')
  }

  onBookClick() {
    this.bookService.updateSelectedBookId(this.id())
  }
}
