import { Component, OnInit } from '@angular/core';
import { links } from 'src/app/links';

type BottomClass = 'navBtnsBottomStick' | 'navBtnsBottomRelative'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public links = links;
  public bottomClass: BottomClass = 'navBtnsBottomStick';
  public shortSidebar = false;

  private heightBreakpoint = 400;

  ngOnInit() {
    this.setBottomItemClass(window);
  }

  toggleDrawerWidth() {
    this.shortSidebar = !this.shortSidebar;
  }

  onResize(event: any) {
    this.setBottomItemClass(event.target);
  }

  setBottomItemClass(window: Window) {
    this.bottomClass = window.innerHeight <= this.heightBreakpoint ?
      'navBtnsBottomRelative' : 'navBtnsBottomStick' 
  }
}