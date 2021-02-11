import { Injectable } from '@angular/core';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx/types';

export interface IExportAsExcelProps {
  readonly data: any[];
  readonly fileName: string;
  readonly sheetName?: string[];
  readonly header?: string[];
  readonly table?: HTMLElement;
}

@Injectable({
  providedIn: 'root',
})
export class ExcelExportService {
  fileExtension = '.xlsx';

  public exportAsExcel({
    data,
    fileName,
    sheetName = ['Data'],
    header,
    table,
  }: IExportAsExcelProps): void {
    let wb: WorkBook;

    console.log('data 0', data[0]);
    console.log('data 1', data[1]);
    console.log('data 2', data[2]);
    console.log('data 3', data[3]);

    const data0 = data[0];
    const data1 = data[1];
    const data2 = data[2];
    const data3 = data[3];

    // const ws: WorkSheet = XLSXUtils.json_to_sheet(data0, { header });
    // const ws2: WorkSheet = XLSXUtils.json_to_sheet(data1, { header });
    // const ws3: WorkSheet = XLSXUtils.json_to_sheet(data2, { header });
    // const ws4: WorkSheet = XLSXUtils.json_to_sheet(data3, { header });

    // wb = XLSXUtils.book_new();
    // XLSXUtils.book_append_sheet(wb, ws, sheetName[0]);
    // XLSXUtils.book_append_sheet(wb, ws2, sheetName[1]);
    // XLSXUtils.book_append_sheet(wb, ws3, sheetName[2]);
    // XLSXUtils.book_append_sheet(wb, ws4, sheetName[3]);

    wb = XLSXUtils.book_new();
    data.forEach((element) => {
      const ws: WorkSheet = XLSXUtils.json_to_sheet(element, { header });
      XLSXUtils.book_append_sheet(wb, ws, sheetName[data.indexOf(element)]);
    });

    const ws1: WorkSheet = wb.Sheets[sheetName[0]];

    XLSXUtils.cell_set_internal_link(ws1['F1'], "'Unidad de Medida'!A1");

    writeFile(wb, `${fileName}${this.fileExtension}`);
  }
}
