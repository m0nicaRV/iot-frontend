import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sala: any;

  constructor(
    private route: ActivatedRoute,
    private salaService: SalaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.salaService.show(id).subscribe(
        data => this.sala = data,
        error => console.error(error)
      );
    }
  }

  onSubmit(): void {
    this.salaService.update(this.sala.id, this.sala).subscribe(
      data => {
        this.router.navigate(['/view', this.sala.id]);
      },
      error => {
        console.error('Error al actualizar sala', error);
      }
    );
  }
}
