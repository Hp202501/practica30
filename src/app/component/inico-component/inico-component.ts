import { Component } from '@angular/core';

@Component({
  selector: 'app-inico',
  standalone: true,
  templateUrl: './inico-component.html',
  styleUrls: ['./inico-component.css']
})
export class InicoComponent {
  showDetails = false;

  mostrar() { this.showDetails = true; }
  ocultar() { this.showDetails = false; }
}
