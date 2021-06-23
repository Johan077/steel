import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {


  URL_API = 'http://localhost:4000/api/autores';
  autores!: Autor[];
  selecteAutor:Autor = {
    nombre:'',
    nacimiento:'',
    Ciudad:'',
    correo:'',
  };
  
  
  constructor(private http:HttpClient) {
  }

  getAutores(){
    return this.http.get<Autor[]>(this.URL_API);
  }

  createAutor(autor: Autor){
    return this.http.post(this.URL_API, autor);
  }

  putAutor(autor: Autor){
    return this.http.put(`${this.URL_API}/$autor._id}`,autor);
  }

  deletAutor(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
