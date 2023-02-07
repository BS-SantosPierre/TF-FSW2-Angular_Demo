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
			{ title: 'Demo 1', url: '/demos/demo1' },
			{ title: 'Demo 2', url: '/demos/demo2' },
			{ title: 'Demo 3', url: '/demos/demo3' },
			{ title: 'Demo 4', url: '/demos/demo4' },
			{ title: 'Demo 5', url: '/demos/demo5' },
			{ title: 'Demo 6', url: '/demos/demo6' },
			{ title: 'Demo 7', url: '/demos/demo7' },
			{ title: 'Demo 8', url: '/demos/demo8' },
		]},
		{ title: 'Exos', children: [
			{ title: 'UserInfo/Input', url: '/exos/exo1' },
			{ title: 'Chrono', url: '/exos/exo2' },
			{ title: 'Spoiler Alert', url: '/exos/exo3' },
			{ title: 'Menu', url: '/exos/exo4' },
			{ title: 'Accordeon', url: '/exos/exo5' },
			{ title: 'Book List', url: '/exos/exo6' },
			{ title: 'Book List (Service)', url: '/exos/exo6-service' },
			{ title: 'Shopping List', url: '/exos/exo7' },
		] }
	]

	toggleVisible(index: number) {
		this.links[index].isVisible = !this.links[index].isVisible;
	}
}
