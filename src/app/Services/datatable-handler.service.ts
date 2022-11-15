import { Injectable } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowElement } from '../row-element.Interfaces/rowElement';

@Injectable({
  providedIn: 'root'
})
export class DatatableHandlerService {

  //This behaviorsubject is the list of rowelements we want to add to
  //it is written as such to restrict access to the subject variable.
  private subject$: BehaviorSubject<RowElement[]> = new BehaviorSubject<RowElement[]>([]);
  tablerows$: Observable<RowElement[]>;
  dataSource: MatTableDataSource<RowElement>;

  constructor() {
    //Tablerows$ refer to the subject adress. This way we can subscribe to whatever changes are in the subject$
    this.tablerows$ = this.subject$.asObservable();
    this.dataSource = new MatTableDataSource<RowElement>([]);
    //normally you'd subscribe by an observer in a different class, but here we use it for updating the datasource
    this.tablerows$.subscribe((tablerows) => {
      this.dataSource.data = this.dataSource.data.concat(tablerows);
    });
   }

   public AddToTable(rowEle : RowElement){
    //we have to put the new row into an array, so it can be pushed
    let element: RowElement[] = [rowEle];
    //When elements get pushed to subject, the subscribe event is fired
    this.subject$.next(element);
   }
}
