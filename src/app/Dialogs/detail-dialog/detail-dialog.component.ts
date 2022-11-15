import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement) { }
  
  ngOnInit(): void {
  }

  SaveChanges(){
    this.data.name
  }
}
