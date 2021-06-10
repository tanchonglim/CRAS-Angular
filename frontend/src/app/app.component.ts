import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links = ['home'];

  showInfo(link: any) {
    console.log('ok');
  }
}
