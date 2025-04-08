import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  salas: any[] = [];
  isLoading: boolean = true;

  constructor(private salaService: SalaService, private router: Router) {}

  ngOnInit(): void {
    this.salaService.mySalas().subscribe(
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
}
