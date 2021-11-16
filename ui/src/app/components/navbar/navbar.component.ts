import { Component } from '@angular/core';
import { links } from 'src/app/links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public links = links;
}