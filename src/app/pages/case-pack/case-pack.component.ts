import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';


import { BusquedaAvanzadaComponent } from '../../components/busqueda-avanzada/busqueda-avanzada.component';


@Component({
  selector: 'app-case-pack',
  templateUrl: './case-pack.component.html',
  styleUrls: ['./case-pack.component.scss'],
})
export class CasePackComponent implements OnInit {
  name = 'Paste it';
  val: any;
  displayedColumns: string[];
  dataSource: any[] = [];
  spinnerEnabled = false;
  keys: string[];
  dataSheet = new Subject();
  @ViewChild('inputFile') inputFile: ElementRef;
  isExcelFile: boolean;

  form: FormGroup;

  uploadxlsx = new FormControl();

  data(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    let row_data = pastedText.split('\n');
    this.displayedColumns = row_data[0].split('\t');
    delete row_data[0];
    // Create table dataSource
    let data = [];

    row_data.forEach((row_data) => {
      let row = {};
      this.displayedColumns.forEach((a, index) => {
        row[a] = row_data.split('\t')[index];
      });
      data.push(row);
    });
    this.dataSource = data;
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      uploadxlsx: [''],
    });

    this.form.controls.uploadxlsx.disable();
  }

  getDataFromClipBoard(event: ClipboardEvent): void {
    navigator['clipboard'].readText().then((dataclip: any) => {
      console.log(dataclip);

      // let clipboardData = event.clipboardData;
      // let pastedText = clipboardData.getData('text');
      let pastedText = dataclip;
      let row_data = pastedText.split('\n');
      this.displayedColumns = row_data[0].split('\t');
      delete row_data[0];
      // Create table dataSource
      let data = [];

      row_data.forEach((row_data) => {
        let row = {};
        this.displayedColumns.forEach((a, index) => {
          row[a] = row_data.split('\t')[index];
        });
        data.push(row);
      });
      this.dataSource = data;
    });
  }

  async cleanDataFromClipBoard(event: ClipboardEvent): Promise<void> {
    await navigator['clipboard'].writeText('').then(() => {
      this.dataSource = [];
      this.displayedColumns = [];
    });

    // navigator['clipboard'].readText().then((dataclip: any) => {});
  }

  onChange(evt) {
    let data, header;
    const target: DataTransfer = evt.target as DataTransfer;
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      this.form.controls.uploadxlsx.setValue(target.files[0].name);
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);
        this.displayedColumns = Object.keys(data[0]);
        this.dataSource = data;
        this.dataSheet.next(data);
      };
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData() {
    this.inputFile.nativeElement.value = '';
    this.form.controls.uploadxlsx.setValue('');
    this.dataSheet.next(null);
    this.keys = null;
    this.dataSource = [];
    this.displayedColumns = [];
  }

busquedaAvanzada(){
  const dialogRef = this.dialog.open(BusquedaAvanzadaComponent, {
    width: '80%',
    height: '90%',
    data: { isNew: true }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });

}

}
