import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/instrumentos.json';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  instrumentosFile: any = (data as any).default;

  constructor() {
  }

  public getInstrumentos(): any[] {
    console.log(this.instrumentosFile.platos);
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentoById(id: string): any {
    for (const instrumento of this.instrumentosFile.instrumentos) {
      if (instrumento.id === id) {
        return instrumento;
      }
    }
  }

  public buscarIntrumentos(termino: string): any[] {
    const instrumentosArr: any[] = [];
    termino = termino.toLowerCase();

    for (const instrumento of this.instrumentosFile.instrumentos) {
      const nombre = instrumento.instrumento.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        instrumentosArr.push(instrumento);
      }

    }
    return instrumentosArr;
  }
}




