import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title: string;
  cor: string = 'red';
  align = 'left';
  respostaApi;

  valor: number = 10;

  nomes: Array<{ prop1: string, prop2:string, prop3:string }>;
  
  constructor(private appService: AppService) 
  {
    
  }

  ngOnInit(): void {
    this.title = this.appService.obterTitulo();
    this.respostaApi = {
      'backgroundColor': 'blue',
      'textAlign': 'right'
    };

    this.nomes = [
      { prop1: "Pessoa 1", prop2: "valor 2", prop3: "valor 3"},
      { prop1: "Pessoa 2", prop2: "valor 2", prop3: "valor 3"},
      { prop1: "Pessoa 3", prop2: "valor 2", prop3: "valor 3"},
    ]
  }

  getTitle(): string {
    return `Itix ${this.title}`;
  }

  onValor(a) 
  {
    this.valor = a;
  }

  onChange(v) 
  {
    this.valor = v;
  }
}
