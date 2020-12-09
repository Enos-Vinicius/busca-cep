import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public removeBusca = new Subject<any>();

  constructor() { }

  getDateTime() {
    let dataPtBr  = new Date().toLocaleDateString('pt-br')
    let dataAtual = new Date();
    let hora      = dataAtual.getHours();
    let minuto    = dataAtual.getMinutes();
    let segundo   = dataAtual.getSeconds();
 
    var horaImprimivel = hora + ":" + minuto + ":" + segundo;
    return dataPtBr + " - " + horaImprimivel;
  }

  getRandom() {
    return Math.floor(Math.random() * 65536);
  }

  setList(list){
    localStorage.setItem('lista', JSON.stringify(list));
  }

  clearLocalStorage(){
    localStorage.clear();
  }
}
