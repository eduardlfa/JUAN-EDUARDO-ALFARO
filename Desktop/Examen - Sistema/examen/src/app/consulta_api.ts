// Importa las directivas y pipes comunes de Angular (*ngIf, *ngFor, etc.) para el template.
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Post{
    UserID: number;
    Id: number;
    Title: string;
    Body: string;
}

@Component({
  selector: 'app-consulta-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta_api.html',
})

export class ConsultaApi implements OnInit {
  posts: Post[] = [];
  cargando = true;
  error = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  
  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.posts = data;
        this.cargando = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = 'Error al consultar la API: ' + err.message;
        this.cargando = false;
        this.cdr.markForCheck();
      },
    });
  }
}