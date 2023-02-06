import { Component } from '@angular/core';
import { Link } from 'src/app/types/Link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	links: Link[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Demos', children: [
			{ title: 'Demo 1', url: 'demo1' },
			{ title: 'Demo 2', url: 'demo2' },
			{ title: 'Demo 3', url: 'demo3' },
			{ title: 'Demo 4', url: 'demo4' },
			{ title: 'Demo 5', url: 'demo5' },
			{ title: 'Demo 6', url: 'demo6' },
		]},
		{ title: 'Exos', children: [
			{ title: 'UserInfo/Input', url: 'exo1' },
			{ title: 'Chrono', url: 'exo2' },
			{ title: 'Spoiler Alert', url: 'exo3' },
			{ title: 'Menu', url: 'exo4' },
			{ title: 'Accordeon', url: 'exo5' },
			{ title: 'Book List', url: 'exo6' },
		] }
	]

	toggleVisible(index: number) {
		this.links[index].isVisible = !this.links[index].isVisible;
	}
}
