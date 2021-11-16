import { Component, OnInit } from '@angular/core';
import { ILink, links } from 'src/app/links';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public tiles: ILink[] = [];

  public gridCols = 2;

  constructor() {
    links.forEach(link => {
      if (link.homepageImgLink) this.tiles.push(link);
    });
  }

  ngOnInit() {
    this.setGridCols(window);
  }

  onResize(event: any) {
    this.setGridCols(event.target);
  }

   setGridCols(window:Window) {
    this.gridCols = window.innerWidth <= 600 ? 1 : 2;
  }

}