import { Injectable, inject, signal } from '@angular/core';
import { input } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = 'https://gutendex.com/books/?page='
  page = signal(1)
  books = signal<Book[]>([])
  selectedBookId = signal<number>(0)

  constructor() {
    this.fetchBooks()
  }

  async fetchBooks() {
    const data =  await fetch(this.baseUrl + this.page()).then(res => res.json())
    this.books.set(data.results)
    console.log(this.books())
  }

  getBookById(): Book | null {
    return this.books().find(book => book.id === this.selectedBookId()) ?? null
  }

  updateSelectedBookId(id:number){
    console.log('user clicked book id ', id)
    this.selectedBookId.set(id)
  }

  
}
