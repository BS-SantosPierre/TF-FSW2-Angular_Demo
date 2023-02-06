import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
	@Input() book!: Book;

	@Output() deleteBook: EventEmitter<number>;

	constructor() {
		this.deleteBook = new EventEmitter<number>();
	}

	sendId(){
		this.deleteBook.emit(this.book.id);
	}
}
