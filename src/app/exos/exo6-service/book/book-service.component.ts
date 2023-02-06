import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/types/Book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.scss']
})
export class BookServiceComponent {
	@Input() book!: Book;

	constructor(
		private _bookService: BookService
	) {}

	deleteBook(){
		this._bookService.deleteBook(this.book);
	}
}
