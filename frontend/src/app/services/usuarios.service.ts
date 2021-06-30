import { Usuario } from "../components/modelos/usuarios.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  listar():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

}
