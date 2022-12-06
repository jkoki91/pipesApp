import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string = 'jorge';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'joRgE lLeonaRt';

  fecha: Date = new Date()

}
