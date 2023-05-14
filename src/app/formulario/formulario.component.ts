import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formUser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
  }
  get nombre() {
    return this.formUser.get('nombre') as FormControl;
  }
  get correo() {
    return this.formUser.get('correo') as FormControl;
  }

  handleSent() {
    console.log(this.formUser.value);
  }
}
