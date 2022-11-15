import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';
import { DetailDialogComponent } from 'src/app/Dialogs/detail-dialog/detail-dialog.component';
import { DatatableHandlerService } from 'src/app/Services/datatable-handler.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor(public dialog: MatDialog, public dtService: DatatableHandlerService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['path', 'name', 'description', 'size'];
  clickedRows = new Set<RowElement>();
  
  ClickedRow(row: RowElement) {
    console.log(row);
    this.clickedRows.add(row);
    this.dialog.open(DetailDialogComponent,{
      data: row
    });
  }
}