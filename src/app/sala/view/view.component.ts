import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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

  goBack(): void {
    this.router.navigate(['/index']);
  }
}
