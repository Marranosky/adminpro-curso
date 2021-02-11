import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

interface Filtro {
  id: string;
  descripcion: string;
}

interface Producto {
  producto: string;
  descripcion: string;
}

const ELEMENT_DATA: Producto[] = [
  { producto: 'producto 1', descripcion: 'descripcion 1' },
  { producto: 'producto 1', descripcion: 'descripcion 1' },
  { producto: 'producto 1', descripcion: 'descripcion 1' },
  { producto: 'producto 1', descripcion: 'descripcion 1' },
  { producto: 'producto 1', descripcion: 'descripcion 1' }
];
const ELEMENT_DATA2 = [{ filtro: '', condicion: '', valor: '', eliminar: '' }];

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.scss'],
})
export class BusquedaAvanzadaComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'descripcion'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: Producto[] = ELEMENT_DATA;

  displayedColumns2: string[] = ['filtro', 'condición', 'valor', 'eliminar'];
  columnsToDisplay2: string[] = this.displayedColumns2.slice();
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['Producto', 'Atributo-Subproducto', 'Código Atributo', 'Localidad'];
  columnsToDisplay3: string[] = this.displayedColumns3.slice();
  dataSource3 = [];


  filtros: Filtro[] = [
    { id: '1', descripcion: 'Filtro 1' },
    { id: '2', descripcion: 'Filtro 2' },
    { id: '3', descripcion: 'Filtro 3' },
  ];

  Form = this.formbuilder.group({
    valor: [''],
    filtro: [''],
  });

  selectedValue: string;

  constructor(
    private formbuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BusquedaAvanzadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  close() {
    this.dialogRef.close();
  }

  Ok() {}

  agregar() {}
}
