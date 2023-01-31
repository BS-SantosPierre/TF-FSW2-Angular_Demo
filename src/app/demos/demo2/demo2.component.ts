import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
	number: number = 0;

	isDisabled: boolean = false;

	randomNumber(): void {
		this.number = Math.floor(Math.random() * 10);
		this.toggleDisable();
	}

	resetNumber(): void {
		this.number = 0;
		this.toggleDisable();
	}

	toggleDisable(): void {
		this.isDisabled = !this.isDisabled;
	}
}
