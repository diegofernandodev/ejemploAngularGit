import { Component } from '@angular/core';
import { Persona } from "../models/file";

@Component({
  selector: 'app-perosna',
  templateUrl: './perosna.component.html',
  styleUrls: ['./perosna.component.css']
})
export class PerosnaComponent {
persona1:Persona={nombre:"marisol", edad: 22}
}
