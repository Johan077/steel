import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import  { NgForm } from '@angular/forms';
import { Autor } from "../../models/autor";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  
  constructor(public autorservice: AutorService ) { }

  ngOnInit(): void {
    this.getAutores();
  }

  resetForm(form : NgForm){
    form.reset();
  }
  
  getAutores(){
    this.autorservice.getAutores().subscribe(
      (res) => {
        this.autorservice.autores= res;
      },
      (err) => console.log(err)
    );
  }

  addAutor(form: NgForm){
    if(form.value){
      this.autorservice.putAutor(form.value).subscribe(
        res => console.log(res),
        err => console.error(err),
      )
    }else{
      this.autorservice.createAutor(form.value).subscribe(
      res => {
        this.getAutores();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deletAutor(id:String){
    if(confirm('¿Esta seguro de elimanr el autor?')){
      this.autorservice.deletAutor(id).subscribe(
        (res) => {
          this.getAutores();
        },  
        (err) => console.error(err)      
      );
    }
  }
  
  editAutor(autor:Autor){
    this.autorservice.selecteAutor= autor;
  }
}
