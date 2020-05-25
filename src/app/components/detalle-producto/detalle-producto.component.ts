import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  instrumentoEncontrado: any;

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      if (data.id !== 0) {
        this.instrumentoEncontrado = this.dataService.getInstrumentoById(data.id);
      }
    }
    );
  }

}
