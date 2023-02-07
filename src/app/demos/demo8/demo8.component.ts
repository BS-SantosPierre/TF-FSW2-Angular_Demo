import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component {
	// Simple Input
	newsletter: FormControl = new FormControl('hello@msn.com');

	// Form Group
	subscriptionForm: FormGroup = new FormGroup({
		firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
		birthDate: new FormControl(''),
		address: new FormGroup({
			street: new FormControl(''),
			zip: new FormControl('')
		})
	});

	// FormGroupBuilder
	artistProfile: FormGroup;

	labels: any[] = [
		{id: 1, name: "Def Jam"},
		{id: 2, name: "Universal"},
	]

	constructor(
		private _fb: FormBuilder
	){
		this.artistProfile = this._fb.group({
			name: ['', [Validators.required]],
			label: [1, [Validators.required]],
			genres: this._fb.array([
				this._fb.control('', Validators.required)
			])
		})
	}
	// Form Array
	get genres(){
		return this.artistProfile.get('genres') as FormArray;
	}

	// Générique méthode Tony
	getFormArray(myForm: FormGroup, nameFormArray: string){
		return myForm.get(nameFormArray) as FormArray;
	}

	addGenre() {
		// this.getFormArray(this.artistProfile, 'genres').push(this._fb.control('', Validators.required));
		this.genres.push(this._fb.control('', Validators.required));
	}

	removeGenre(id: number) {
		this.genres.removeAt(id);
	}

	hasErrorAndTouched(myForm: FormGroup, inputName: string, validator: string) {
		return myForm.get(inputName)?.hasError(validator)
			&& (myForm.get(inputName)?.touched || myForm.get(inputName)?.dirty);
	}

	handleSubmit() {
		// Vérifier que le form est valide
		if (this.subscriptionForm.valid) {
			console.log(this.subscriptionForm.value);
			this.subscriptionForm.reset();
		}
	}
}
