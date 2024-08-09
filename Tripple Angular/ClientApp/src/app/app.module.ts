import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // For ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
