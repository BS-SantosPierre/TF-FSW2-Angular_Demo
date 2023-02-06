import { Component } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {
	bookName: string = '';
	errorMessage: string = '';

	currentId: number = 3;

	books: Book[] = [
		new Book(1, "One Piece"),
		new Book(2, "Naruto"),
		new Book(3, "Bleach"),
	];

	addBook() {
		// Reset message erreur
		this.errorMessage = '';
		// Vérification si l'input n'est pas vide
		// '' => False
		if (this.bookName.trim()) {
			this.currentId += 1;
			// Création du livre avec le nouvelle id et son nom
			const newBook = new Book(this.currentId, this.bookName.trim());
			// Ajout du livre dans le tableau
			this.books.push(newBook);
			// Reset Input
			this.bookName = '';
		} else {
			this.errorMessage = "Book Name Is Required";
		}
	}

	deleteBook(event: number) {
		// Chercher l'index du livre
		const indexBook = this.books.findIndex((book) => {
			return book.id === event;
		});
		// Vérification si le livre existe
		if (indexBook === -1) {
			console.log("Book Not found");
			return;
		}
		// Suppression du livre
		this.books.splice(indexBook, 1);
	}
}
