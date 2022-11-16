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

  //Dependency injection of our service and a reference to a matdialog, so we can open it
  constructor(public dialog: MatDialog, public dtService: DatatableHandlerService) { }

  ngOnInit(): void {
  }

  //Mattable uses this for choosing what columns to display
  displayedColumns: string[] = ['path', 'name', 'description', 'size'];
  clickedRows = new Set<RowElement>();
  
  ClickedRow(row: RowElement) {
    console.log(row);
    this.clickedRows.add(row);
    this.dialog.open(DetailDialogComponent,{
      data: row
    })
    //This part would be used if SaveChanges() was used
    // .afterClosed().subscribe((data: RowElement) => {
    //   row = data;
    // });
  }
}