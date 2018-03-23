import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-commerce-message-dialog',
  templateUrl: './commerce-message-dialog.component.html',
  styleUrls: ['./commerce-message-dialog.component.css']
})
export class CommerceMessageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CommerceMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
