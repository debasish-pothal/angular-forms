import { Component } from '@angular/core';
import { Employee } from './model/employee.model';
import { FormPosterService } from './services/form-poster.service';
import { NgForm } from '@angular/forms';

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

  constructor(private formPoster: FormPosterService) {

  }

  validatePrimaryLanguage(event) {
    if (event === 'default') {
      this.invalidPrimaryLanguage = true;
    }else {
      this.invalidPrimaryLanguage = false;
    }
  }

  submitForm(form: NgForm) {
    this.formPoster.postEmployee(form.value)
      .subscribe(
        data => console.log('success : ', data),
        err => console.log('error : ', err)
      );
  }
}
