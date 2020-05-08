import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    run = '';
    serie = '';
    mensajeRun = '';
    mensajeSerie = '';
    runArray: string[];
    disableMensaje = false;

    constructor() { }

    ngOnInit() {
    }

    validaSerie(e: any) {
      this.serie = e.target.value;
      console.log(this.serie);
    }

    validaRun(e: any) {
      this.run = e.target.value;
    }

    validarDatosAcceso() {
      this.runArray = this.run.replace('.', '').split('-');
      let paso = true;
      // tslint:disable-next-line: triple-equals
      if (this.run.length == 0) {
        this.mensajeRun = 'Debe ingresar el run';
        paso = false;
      }
      // tslint:disable-next-line: triple-equals
      if (this.serie.length == 0) {
        this.mensajeSerie = 'Debe ingresar la serie';
      } else {
        this.mensajeSerie = '';
      }
      if (paso) {
        this.mensajeRun = this.validaDV();
        console.log(this.mensajeRun);

        // tslint:disable-next-line: triple-equals
        if (this.mensajeRun.length == 0 && this.mensajeSerie.length == 0) {
          this.disableMensaje = true;
        }
      }
    }

    desactivaModal() {
      this.disableMensaje = false;
    }

    validaDV() {
      const runSinDv = this.runArray[0];
      const dv = this.runArray[1];
      let dvConvertido = '';
      let dvEsperado = 0;
      let multiplo = 2;
      let suma = 0;
      for (let i = 1; i <= runSinDv.length; i++) {
        // Obtener su Producto con el Múltiplo Correspondiente
        const index = multiplo *  Number(runSinDv.charAt(runSinDv.length - i));

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
      }

      // Calcular Dígito Verificador en base al Módulo 11
      dvEsperado = 11 - (suma % 11);

      // Casos Especiales (0 y K)
      switch (dvEsperado) {
        case 11:
          dvConvertido = 'K';
          break;
        case 10:
          dvConvertido = '0';
          break;
        default:
          dvConvertido = String(dvEsperado);
          break;
      }
      // tslint:disable-next-line: triple-equals
      return (dvConvertido.localeCompare(dv)) == 0 ? '' : 'El rut ingresado no es valido';
    }
}
