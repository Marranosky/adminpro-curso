import { Component, OnInit } from '@angular/core';
import { ExcelDataService } from 'src/app/services/export-excel/excel-data.service';
import { ExcelExportService } from '../../services/export-excel/excel-export.service';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styles: [],
})
export class ExportExcelComponent implements OnInit {
  constructor(
    public _export: ExcelExportService,
    public _data: ExcelDataService
  ) {}

  ngOnInit() {}

  exportar() {

    const dataUnidadPeso = this._data.dataUnidadPeso;
    const dataCasePack = this._data.dataCasePack;
    const dataUnidadMedida = this._data.dataUnidadMedida;
    const dataUOMDimension = this._data.dataUOMDimension;

    this._export.exportAsExcel({
      data: [dataCasePack, dataUnidadPeso, dataUnidadMedida, dataUOMDimension],
      fileName: 'casepackfile',
      sheetName: [
        'Case Pack',
        'Unidad de Peso',
        'Unidad de Medida',
        'UOM Dimension',
      ],
    });
  }
}
