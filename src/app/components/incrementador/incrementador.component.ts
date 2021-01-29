import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
 
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;

  @Input() leyenda: string = 'Leyenda';

  @Input() porcentaje: number = 50;


  @Output() cambiaValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Porcentaje', this.porcentaje);
  }

  ngOnInit(): void {
    console.log('Leyenda', this.leyenda);
    console.log('Porcentaje', this.porcentaje);
  }

  onChange(newValue: number) {
    console.log('new Value : ', newValue);

    // let elemtHTML: any = document.getElementsByName('porcentaje')[0];

    // console.log('elemento: ', elemtHTML.value);

    // console.log(this.txtPorcentaje);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // this.porcentaje = newValue;

    // elemtHTML.value = Number(newValue);

    this.txtPorcentaje.nativeElement.value = Number(newValue);

    this.cambiaValor.emit(this.porcentaje);

    this.txtPorcentaje.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambiaValor.emit(this.porcentaje);
  }
}
