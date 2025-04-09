import { Component, input, output } from '@angular/core';
import { type Book } from '../../models/book';


@Component({
  selector: 'li[book-card]',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  book = input.required<Book>()
  bookSelected = output<Book>()

  // resizeTitle(title: string, maxNumber: number):string {
  //   const wordsArray = title.split(' ')
  //   const resizedArray = wordsArray.slice(0, maxNumber)
  //   return resizedArray.join(' ')
  // }

  // onBookClick() {
    
  // }
  selectBook() {
    this.bookSelected.emit(this.book())
  }
}
