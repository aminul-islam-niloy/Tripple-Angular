import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
})
export class EditBookComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    yearPublished: new Date().getFullYear(),
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }

  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
