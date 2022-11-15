import { Injectable } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowElement } from '../row-element.Interfaces/rowElement';

@Injectable({
  providedIn: 'root'
})
export class DatatableHandlerService {

  private subject$: BehaviorSubject<RowElement[]> = new BehaviorSubject<RowElement[]>([]);
  tablerows$: Observable<RowElement[]>;
  dataSource: MatTableDataSource<RowElement>;

  constructor() {
    this.tablerows$ = this.subject$.asObservable();
    this.dataSource = new MatTableDataSource<RowElement>([]);
    this.tablerows$.subscribe((tablerows) => {
      this.dataSource.data = this.dataSource.data.concat(tablerows);
    });
   }

   public AddToTable(rowEle : RowElement){
    let element: RowElement[] = [rowEle];
    this.subject$.next(element);
   }
}
