import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  displayedColumns: string[] = ['cep', 'logradouro', 'data', 'acoes'];
  listCep = ELEMENT_DATA;
  loadSpinner: boolean = false;

  constructor(
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  removeItemList(id: number) : void {

    let index;
    for(let i in this.listCep){
      if(this.listCep[i]['id'] === id){
        index = i;
      }
    }

    this.listCep.splice(index, 1);
    this.util.clearLocalStorage();
    this.util.setList(this.listCep);
    this.getList();
  }

  getList() : void {
    let lista = JSON.parse(localStorage.getItem('lista'));
    this.listCep =  lista ? lista : [];
  }

}
