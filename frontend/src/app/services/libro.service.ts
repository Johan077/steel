import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { libro } from '../models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibroService {  
  libros!: libro[];
  URL_API = 'http://localhost:4000/api/libros';
  selecteLibro:libro = {
    titulo:'',
    year:0,
    genero:'',
    paginas:0,
    editorial:'',
    autor:'',
  };
  
  
  constructor(private http:HttpClient) {
  }

  getLibros(){
    return this.http.get<libro[]>(this.URL_API);
  }

  createLibro(book: libro){
    return this.http.post(this.URL_API, book);
  }

  putlibro(book: libro){
    return this.http.put(`${this.URL_API}/$book._id}`,book);
  }

  deletLibro(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

}

