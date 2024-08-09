import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    yearPublished: new Date().getFullYear(),
    price: 0,
  };

  constructor(private bookService: BookService, private router: Router) {}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
