import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import  { NgForm } from '@angular/forms';
import { libro } from "../../models/libro";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(public libroservices: LibroService ) { }

  ngOnInit(): void {
    this.getLibros();
  }

  resetForm(form : NgForm){
    form.reset();
  }
  
  getLibros(){
    this.libroservices.getLibros().subscribe(
      (res) => {
        this.libroservices.libros= res;
      },
      (err) => console.log(err)
    );
  }

  addlibro(form: NgForm){
    if(form.value){
      this.libroservices.putlibro(form.value).subscribe(
        res => console.log(res),
        err => console.error(err),
      )
    }else{
      this.libroservices.createLibro(form.value).subscribe(
      res => {
        this.getLibros();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deletLibro(id:String){
    if(confirm('¿Esta seguro de elimanr el libro?')){
      this.libroservices.deletLibro(id).subscribe(
        (res) => {
          this.getLibros();
        },  
        (err) => console.error(err)      
      );
    }
  }
  
  editLibro(book:libro){
    this.libroservices.selecteLibro= book;
  }

}

