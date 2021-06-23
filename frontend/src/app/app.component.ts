import { Component } from '@angular/core';
import { BuscadorComponent } from './components/buscador/buscador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'steel ';

  buscarlibro(libroSearch:string){
    this.router.navigate(['buscar/',libroSearch]);
  }

  libroSearch:string;
  constructor(private _activatedRoute:ActivatedRoute, private _datosService:DatosService) { }

  ngOnInit() {
    this.datosTarjeta=this._datosService.datosTarjeta;
    this._activatedRoute.params.subscribe(params=>{
      this.libroSearch=params['palabra'];
      this.datosTarjeta=this._cochesService.buscarTarjetas(params['palabra']);
    })
  }
}
