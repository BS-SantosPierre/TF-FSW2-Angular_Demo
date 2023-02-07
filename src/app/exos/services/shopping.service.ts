import { Injectable } from '@angular/core';
import { ShoppingItem, ShoppingItemDTO } from 'src/app/types/ShoppingItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
	private _currentId: number = 1;

	private _shoppingList: ShoppingItem[] = [
		{
			id: 1,
			name: 'Pomme',
			isPromo: true,
			quantity: 1,
			unitPrice: 3.30
		}
	]

	private _totalPrice: number;

  constructor() {
		this._totalPrice = this.getTotalPrice();
	}

	// Récupérer tout les produits
	getAll() {
		return this._shoppingList;
	}

	// Calcul le prix total du panier
	getTotalPrice() {
		this._totalPrice = this._shoppingList.reduce((acc, current) => {
			return acc + (current.quantity * current.unitPrice);
		}, 0);

		return this._totalPrice;
	}

	// Ajout d'un produit à la liste
	create(item: ShoppingItemDTO) {
		this._currentId++;
		const newItem: ShoppingItem = {
			id: this._currentId,
			quantity: 1,
			name: item.name,
			isPromo: item.isPromo,
			unitPrice: item.unitPrice
		}
		// Ajout du produit
		this._shoppingList.push(newItem);
		// Recalcule du prix
		this.getTotalPrice();
	}

	// Suppression d'un produit de la liste
	delete(id: number) {
		const indexItemToDelete = this._shoppingList.findIndex(item => item.id === id);

		if (indexItemToDelete === -1) {
			console.log("Suppression impossible");
			return;
		}

		// Supprimer l'élément
		this._shoppingList.splice(indexItemToDelete, 1);
		this.getTotalPrice();
	}

	// Mise à jour de la quantité
	updateQuantity(id: number, increment: boolean = true){
		const itemIndex = this._shoppingList.findIndex(item => item.id === id);

		if (increment) {
			this._shoppingList[itemIndex].quantity += 1;
		}else {
			this._shoppingList[itemIndex].quantity -= 1;
			// Vérifier si la quantité est à 0
			if (this._shoppingList[itemIndex].quantity === 0) {
				this.delete(id);
			}
		}

		this.getTotalPrice();
	}
}
