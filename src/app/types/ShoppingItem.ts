export type ShoppingItem = {
	id: number;
	name: string;
	quantity: number;
	isPromo: boolean;
	unitPrice: number;
}

export type ShoppingItemDTO = {
	name: string;
	isPromo: boolean;
	unitPrice: number;
}

// export type ShoppingItemDTO = Omit<ShoppingItem, 'id' | 'quantity'>;

// export type ShoppingPartial = Partial<ShoppingItem>
