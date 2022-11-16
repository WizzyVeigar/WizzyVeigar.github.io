import { Component, OnInit } from '@angular/core';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';
import { DatatableHandlerService } from 'src/app/Services/datatable-handler.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  //DI of our service
  constructor(private dtService: DatatableHandlerService) { }

  ngOnInit(): void {
  }
  
  ImageUploaded(event: any){
    var file = event.target.files[0];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (validImageTypes.includes(file.type)) {  
      //Make the path into an image we can plop into our object, using filereader   
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);		
      reader.onload = (_event) => {
        const rowEle:RowElement = {name: file.name, description: '', size: file.size, path: reader.result}
        console.log(rowEle)
        this.dtService.AddToTable(rowEle);
      }
    }
  }
}
