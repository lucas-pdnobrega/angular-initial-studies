import { Component } from '@angular/core';
import { Usuario } from 'src/shared/model/usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial';
  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario("", 11111111, 0);
    this.usuarios = [];
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario("", 11111111, 0);
  }

  listar():void {
    console.log(this.usuarios)
  }
}
