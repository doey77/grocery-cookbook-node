import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public tiles: HomepageGridTile[] = [
    {
      displayText: 'Shopping List',
      routerLink: '/shoppinglist',
      imgLink: '/assets/shopping-list.jpg'
    },
    {
      displayText: 'Recipes',
      routerLink: '/recipes',
      imgLink: '/assets/recipes.jpg'
    },
  ]

  public gridCols = 2;

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

interface HomepageGridTile {
  displayText: string,
  imgLink: string,
  routerLink: string,
}