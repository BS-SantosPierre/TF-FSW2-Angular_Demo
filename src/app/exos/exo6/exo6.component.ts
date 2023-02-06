import { Component } from '@angular/core';
import { Book } from 'src/app/types/Book';

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
		{ id: 1, name: "One Piece" },
		{ id: 2, name: "Naruto" },
		{ id: 3, name: "Bleach" }
	];

	addBook() {
		// Reset message erreur
		this.errorMessage = '';
		// Vérification si l'input n'est pas vide
		// '' => False
		if (this.bookName.trim()) {
			this.currentId += 1;
			// Création du livre avec le nouvelle id et son nom
			const newBook: Book = {
				id: this.currentId,
				name: this.bookName.trim()
			};
			// Ajout du livre dans le tableau
			this.books.push(newBook);
			// Reset Input
			this.bookName = '';
		} else {
			this.errorMessage = "Book Name Is Required";
		}
	}

	deleteBook(bookChildren: Book) {
		// Chercher l'index du livre
		const indexBook = this.books.findIndex((book) => {
			return book.id === bookChildren.id;
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
