import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  
  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['María','pepe','mmm','maca','jorge'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = this.clientes[this.clientes.length - 1]
  }

  borrarCliente(){
    // this.clientes = this.clientes.slice( 0, this.clientes.length - 1 )
    this.clientes.pop(); //borra el ultimo
    console.log(this.clientes);
  }


}
