import { Component } from '@angular/core';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component {
  isOpen: boolean = false;

  links: string[] = ["Link 1", "Link 2", "Link 3"];
}
