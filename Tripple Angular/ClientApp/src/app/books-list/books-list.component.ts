import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((book) => book.id !== id);
    });
  }
}
