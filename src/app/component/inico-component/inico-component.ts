import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inico',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inico-component.html',
  styleUrls: ['./inico-component.css']
})
export class InicoComponent {
  showDetails = false;

  mostrar() { this.showDetails = true; }
  ocultar() { this.showDetails = false; }
}
