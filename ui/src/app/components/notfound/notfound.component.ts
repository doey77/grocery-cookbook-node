import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `<div class="center"><h1>The requested page could not be found</h1></div>`,
  styles: [`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    text-align: center;
  }
  `]
})
export class NotfoundComponent {}