import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  editoriales!: Editorial[];
  URL_API = 'http://localhost:4000/api/editoriales';
  selecteEditorial:Editorial = {
    nombre:'',
    correspndencia:'',
    telefono:0,
    correo:'',
    Libros:0,
  };
  
  
  constructor(private http:HttpClient) {
  }

  getEditoriales(){
    return this.http.get<Editorial[]>(this.URL_API);
  }

  createEditorial(edito: Editorial){
    return this.http.post(this.URL_API, edito);
  }

  putlEditorial(edito: Editorial){
    return this.http.put(`${this.URL_API}/$edito._id}`,edito);
  }

  deletEditorial(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

}
