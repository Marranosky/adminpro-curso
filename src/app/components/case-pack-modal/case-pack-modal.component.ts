import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-case-pack-modal',
  templateUrl: './case-pack-modal.component.html',
  styles: [],
})
export class CasePackModalComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CasePackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  close() {
    this.dialogRef.close();
  }
}
