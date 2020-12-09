import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string;
  password: string;

  logData() {
    console.log(this.username);
    console.log(this.password);
  }

  onSubmit() {}
}
