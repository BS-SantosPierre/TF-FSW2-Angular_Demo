import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exo6-service',
  templateUrl: './exo6-service.component.html',
  styleUrls: ['./exo6-service.component.scss']
})
export class Exo6ServiceComponent implements OnInit {
	bookName: string = '';

	books: Book[] = [];

	// Autre écriture pour l'injection de service
	// private _bookService: BookService;

	// constructor(){
	// 	this._bookService = new BookService();
	// }

	constructor(
		private _bookService: BookService
	){}

	ngOnInit(): void {
		// Récupération des livres depuis mon service
		this.books = this._bookService.getAll();
	}

	addBook() {
		this._bookService.addBook(this.bookName);
	}
}
