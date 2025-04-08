import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  sala: any = {
    titulo: '',
    estado: 'off'
  };
  selectedFile: File | null = null;

  constructor(private salaService: SalaService, private router: Router) {}

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('titulo', this.sala.titulo);
    formData.append('estado', this.sala.estado);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.salaService.create(formData).subscribe({
      next: () => {
        this.router.navigate(['/sala']);
      },
      error: (error) => {
        console.error('Error al crear sala', error);
      }
    });
  }
}
