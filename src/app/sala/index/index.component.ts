import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  salas: any[] = [];
  isLoading: boolean = true;
  user: any; // Puedes obtener el usuario desde tu AuthService

  constructor(private salaService: SalaService, private router: Router) {}

  ngOnInit(): void {
    this.salaService.index().subscribe(
      data => {
        this.salas = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  view(id: number): void {
    this.router.navigate(['/view', id]);
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  isOwner(salaUserId: number): boolean {
    return this.user && this.user.id === salaUserId;
  }
}
