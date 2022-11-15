import { Component, OnInit } from '@angular/core';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';
import { DatatableHandlerService } from 'src/app/Services/datatable-handler.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  msg = "";

  constructor(private dtService: DatatableHandlerService) { }

  ngOnInit(): void {
  }

  ImageUploaded(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
    var file = event.target.files[0];
    console.log(file.type);
    console.log(event.target.value);
    const rowEle:RowElement = {name: file.name, description: '',size: file.size, path: event.target.value}
    this.dtService.AddToTable(rowEle);
  }
}
