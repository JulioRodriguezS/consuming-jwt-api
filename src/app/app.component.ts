import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consuming-jwt-api';
  youClicked(Name: HTMLInputElement): void {
    const name: string = Name.value;
    alert(name);
  }
}
