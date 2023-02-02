import { Component } from '@angular/core';
import { Cours } from '../models/Cours';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component {
  courses: Cours[] = [
    new Cours("HTML", "Mettre en page des sites web"),
    new Cours("CSS", "Les rendre plus ou moins beau"),
    new Cours("JS", "Les rendre dynamique"),
    new Cours("C#", "Un super langage orienté"),
  ];

  toggleDescription(i: number){
    // Mettre tout les cours isActive à false
    this.courses.forEach((cours) => {
      if (cours.title !== this.courses[i].title) {
        cours.isActive = false;
      }
    });

    this.courses[i].isActive = !this.courses[i].isActive;
  }
}
