import { Component } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {
	prenomParent: string = "Roger";
	messageDeFiston: string = "En attente d'un bonjour du Fiston"

	prenomsEnfant: string[] = ["Pierre", "Paul", "Jacques"];

	// Méthodes qui sera envoyer à l'enfant pour mettre à jour les infos du parents
	recevoirBonjour(event: string) {
		this.messageDeFiston = event;
	}
}
