import { Component } from '@angular/core';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-home',
  imports: [BookDetailsComponent, BookListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
