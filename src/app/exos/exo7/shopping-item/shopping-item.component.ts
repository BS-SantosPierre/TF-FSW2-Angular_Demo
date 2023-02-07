import { Component, Input } from '@angular/core';
import { ShoppingItem } from 'src/app/types/ShoppingItem';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent {
	@Input() item!: ShoppingItem;

	constructor(
		private _shoppingService: ShoppingService
	){}

	delete(): void {
		this._shoppingService.delete(this.item.id);
	}

	updateQuantity(increment: boolean = true): void {
		this._shoppingService.updateQuantity(this.item.id, increment);
	}
}
