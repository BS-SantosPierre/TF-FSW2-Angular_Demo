import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
	// Input info reçu du parent
	@Input() prenomPapa: string = "Anonyme";

	@Input() prenomEnfant: string = "John";

	@Input() age: number = 0;

	// Méthodes reçu du parent
	@Output() direBonjour: EventEmitter<string> = new EventEmitter<string>();

	emmettreUnBonjour(age: number) {
		// Message envoyer au composant parent
		this.direBonjour.emit(`Bjr papa, c'est ${this.prenomEnfant}, j'ai ${age} ans`);
	}
}
