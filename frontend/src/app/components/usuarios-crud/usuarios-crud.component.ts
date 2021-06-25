import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../modelos/usuarios.model';

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {

  usuario: Usuario = {
    nome: "",
    idade: null,
    email: ""

  }

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  isVazio(): boolean {
    if (this.usuario.nome == "" || this.usuario.idade == null || this.usuario.email == "") {
      return true;
    }
    return false;
  }

  cadastrarUsuario(): void {
    if (this.isVazio()) {
      alert("Preencha todos os campos de cadastro")
    }
    else {
      this.usuariosService.cadastrar(this.usuario).subscribe(() => {
        alert("Usuário cadastrado com sucesso!")
        this.apagarInfo()
      })
    }
  }

  apagarInfo(): void {
    this.usuario.nome = "";
    this.usuario.idade = null;
    this.usuario.email = "";
  }

}
