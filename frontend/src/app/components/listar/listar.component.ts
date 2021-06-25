import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../modelos/usuarios.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];
  usuariosRender: Usuario[];
  termoBusca = "";

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(usuarios => {
      this.usuarios = usuarios
      this.usuariosRender = usuarios
      console.log(this.usuarios)
    })
  }

  filtrarTabela(termoBusca: string): void{
    if (termoBusca == "") {
      this.usuariosRender = this.usuarios;
    }
    else {
      this.usuariosRender = this.usuarios.filter(user => { return user.nome.toLowerCase().includes(termoBusca.toLowerCase())})
    }

  }

  buscar(): void {
    if (this.termoBusca == "") {
      alert("Busca vazia")
    }
    else {
      this.usuariosRender = this.usuarios.filter(user => { return user.nome == this.termoBusca })
    }
  }

  limpar(): void {
    this.usuariosRender = this.usuarios;
    this.termoBusca = "";
  }

}
