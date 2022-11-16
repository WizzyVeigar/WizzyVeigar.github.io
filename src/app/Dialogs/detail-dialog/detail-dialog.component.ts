import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})

export class DetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement
  ) { }
  //This would be in the constructor, see below as for why its commented
  // private dialogref: MatDialogRef<DetailDialogComponent>
  
  ngOnInit(): void {
  }

  //Save
  //This was used at one point, but after using two way binding with [(ngmodel)] it is no longer necessary in view
  // SaveChanges(){
  //   let changedElement: RowElement = {name: this.data.name, description: this.data.description, 
  //     path: this.data.path, size: this.data.size}; 
  //     console.log("changed element");
  //     console.log(changedElement);
  //   this.dialogref.close(changedElement);
  // }
}
