import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosEncontrados: any[] = [];
  terminoBuscado: string;

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.terminoBuscado = data.termino;
      this.instrumentosEncontrados = this.dataService.buscarIntrumentos(data.termino);
    });
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle/' + id]);
  }

}
