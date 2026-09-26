import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaApi } from './consulta_api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsultaApi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title ='examen';
}
