import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
	age: number;
	hobby: string;
	pseudo: string;

	constructor(){
		this.age = 26;
		this.hobby = "Manger";
		this.pseudo = "BSSantos";
	}

	getUserInfos() {
		return `Je suis ${this.pseudo}, j'ai ${this.age} ans et j'aime ${this.hobby}`;
	}
}
