import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'busca-cep';

  sendSite(){
    window.open('https://www.sccon.com.br/', '_blank');
  }
}
