import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
	@Input() book!: Book;

	@Output() deleteBook: EventEmitter<Book>;

	constructor() {
		this.deleteBook = new EventEmitter<Book>();
	}

	sendBook(){
		this.deleteBook.emit(this.book);
	}
}
