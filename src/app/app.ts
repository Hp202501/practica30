import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicoComponent } from './component/inico-component/inico-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InicoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica30');
}
