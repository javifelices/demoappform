import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  powers = ['Inteligente', 'Creativ@', 'Sincer@', 'Productiv@', 'Humilde', 'Paciente'];

  model = new Persona(1, 'Javi', this.powers[4], 'Mr. Empatía');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

  newPersona() {
    this.model = new Persona(2, 'Victoria', this.powers[5], 'La Jefa');
  }

}
