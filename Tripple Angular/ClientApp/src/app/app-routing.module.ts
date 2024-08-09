import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '', component: BooksListComponent }, // Default route
  { path: 'add', component: AddBookComponent }, // Route for adding a book
  { path: 'edit/:id', component: EditBookComponent }, // Route for editing a book
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
