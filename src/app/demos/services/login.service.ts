import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private users: User[] = [
		new User(1, "Santos", "Pierre", "santosp", "1234"),
		new User(2, "Strimelle", "Aurélien", "strimellea", "Test1234="),
		new User(3, "Beurive", "Aude", "beurivea", "5678"),
	];

	connectedUser?: User;

  constructor() { }

	login(userLogin: string, userPassword: string) {
		// On va vérifier si le login est présent dans la base de données.
		this.connectedUser = this.users.find((user) => user.login === userLogin);
		if (this.connectedUser) {
			// Si on l'a trouvé, si le password n'est pas ok
			if (this.connectedUser.password !== userPassword) {
				this.connectedUser = undefined;
			}
		}else {
			// Pas nécessaire puisqu'on stocke déjà undefined avec la méthode find()
			this.connectedUser = undefined;
		}
		console.log(this.connectedUser);
	}

	logout() {
		this.connectedUser = undefined;
	}
}
