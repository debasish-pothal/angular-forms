import { Component } from '@angular/core';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Forms';
  languages = ['English', 'Hindi', 'Chinese'];
  employee = new Employee('Debasish', 'Pothal', true, 'W2', 'default');
  invalidPrimaryLanguage = false;

  validatePrimaryLanguage(event) {
    if (event === 'default') {
      this.invalidPrimaryLanguage = true;
    }else {
      this.invalidPrimaryLanguage = false;
    }
  }
}
