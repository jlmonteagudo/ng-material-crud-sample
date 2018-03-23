import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-commerce-yesno-dialog',
  templateUrl: './commerce-yesno-dialog.component.html',
  styleUrls: ['./commerce-yesno-dialog.component.css']
})
export class CommerceYesNoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CommerceYesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
