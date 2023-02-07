import { Component, OnInit } from '@angular/core';
import { ShoppingItem, ShoppingItemDTO } from 'src/app/types/ShoppingItem';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-exo7',
  templateUrl: './exo7.component.html',
  styleUrls: ['./exo7.component.scss']
})
export class Exo7Component implements OnInit {
	listItems: ShoppingItem[] = [];
	// Inputs
	// name: string = '';
	// isPromo: boolean = false;
	// unitPrice: number = 0;
	dataInput: ShoppingItemDTO = {
		name: '',
		isPromo: false,
		unitPrice: 0
	}

	constructor(
		private _shoppingService: ShoppingService
	){}

	ngOnInit(): void {
		this.listItems = this._shoppingService.getAll();
	}

	add(): void {
		this._shoppingService.create(this.dataInput);
	}

	totalPrice(): number {
		return this._shoppingService.getTotalPrice();
	}
}
