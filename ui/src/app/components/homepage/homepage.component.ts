import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';

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
      imgLink: 'https://images.pexels.com/photos/162986/vodka-ruska-alcohol-drunkenness-162986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      displayText: 'N/A',
      routerLink: '/',
      imgLink: 'https://images.pexels.com/photos/162986/vodka-ruska-alcohol-drunkenness-162986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      displayText: 'N/A',
      routerLink: '/',
      imgLink: 'https://images.pexels.com/photos/162986/vodka-ruska-alcohol-drunkenness-162986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      displayText: 'N/A',
      routerLink: '/',
      imgLink: 'https://images.pexels.com/photos/162986/vodka-ruska-alcohol-drunkenness-162986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
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