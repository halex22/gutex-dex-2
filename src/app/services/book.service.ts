import { Injectable, effect, inject, signal } from '@angular/core';
import { input } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = 'https://gutendex.com/books/?page='
  page = signal(1)
  books = signal<Book[]>([])

  constructor() {
    effect(() => {
      this.fetchBooks()
    })
    
  }

  async fetchBooks() {
    const data =  await fetch(this.baseUrl + this.page()).then(res => res.json())
    this.books.set(data.results)
    console.log(this.books())
  }



  
}
