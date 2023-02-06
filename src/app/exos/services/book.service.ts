import { Injectable } from '@angular/core';
import { Book } from 'src/app/types/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
	private currentId = 3;

	private _books: Book[] = [
		{ id: 1, name: "One Piece" },
		{ id: 2, name: "Naruto" },
		{ id: 3, name: "Bleach" }
	];

  constructor() { }

	// Getter pour les livres car propriété en
	getAll(): Book[] {
		return this._books;
	}

	// Ajout d'un livre dans ma liste
	addBook(bookName: string) {
		if (bookName.trim()) {
			this.currentId += 1;
			// Création du livre avec le nouvelle id et son nom
			const newBook: Book = {
				id: this.currentId,
				name: bookName.trim()
			};
			// Ajout du livre dans le tableau
			this._books.push(newBook);
		}
	}

	// Suppression d'un livre de ma liste
	deleteBook(bookToDelete: Book) {
		// Chercher l'index du livre
		const indexBook = this._books.findIndex((book) => {
			return book.id === bookToDelete.id;
		});
		// Vérification si le livre existe
		if (indexBook === -1) {
			console.log("Book Not found");
			return;
		}
		// Suppression du livre
		this._books.splice(indexBook, 1);
	}
}
