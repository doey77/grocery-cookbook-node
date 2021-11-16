import { Component } from '@angular/core';
import { ILink, links } from 'src/app/links';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public tiles: ILink[] = [];

  public gridCols = 2;

  constructor() {
    links.forEach(link => {
      if (link.homepageImgLink) this.tiles.push(link);
    });
  }

  onResize(event: any) {
    this.setGridCols(event.target);
  }

  /**
   * Set the number of columns for the drink grid
   * @param obj - Variable with current inner width
   */
   setGridCols(obj:any) {
    this.gridCols = obj.innerWidth <= 600 ? 1 : 2;
  }

}