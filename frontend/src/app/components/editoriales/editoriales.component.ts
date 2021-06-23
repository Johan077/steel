import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../../services/editorial.service';
import  { NgForm } from '@angular/forms';
import { Editorial } from "../../models/editorial";

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  constructor(public editorialservices: EditorialService ) { }

  ngOnInit(): void {
    this.getEditoriales();
  }

  resetForm(form : NgForm){
    form.reset();
  }
  
  getEditoriales(){
    this.editorialservices.getEditoriales().subscribe(
      (res) => {
        this.editorialservices.editoriales= res;
      },
      (err) => console.log(err)
    );
  }

  addliEditorial(form: NgForm){
    if(form.value){
      this.editorialservices.putlEditorial(form.value).subscribe(
        res => console.log(res),
        err => console.error(err),
      )
    }else{
      this.editorialservices.createEditorial(form.value).subscribe(
      res => {
        this.getEditoriales();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deletEditorial(id:String){
    if(confirm('¿Esta seguro de elimanr la  editorial?')){
      this.editorialservices.deletEditorial(id).subscribe(
        (res) => {
          this.getEditoriales();
        },  
        (err) => console.error(err)      
      );
    }
  }
  
  editEditorial(edito:Editorial){
    this.editorialservices.selecteEditorial= edito;
  }


}
