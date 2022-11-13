import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/citas.model';
import { CitaService } from '../../cita.service';

@Component({
  selector: 'app-show-citas',
  templateUrl: './show-citas.component.html',
  styleUrls: ['./show-citas.component.css']
})
export class ShowCitasComponent implements OnInit {

  citas: Cita[]

  constructor(private citaService:CitaService) { }

  ngOnInit(): void {
    //console.log(this.postService.getPosts()) //traemos un observable


    //Subscribe() es un método que conecta el observer con eventos observable. Siempre que se realiza algún cambio en estos observables, se ejecuta un código y observa los resultados o cambios mediante el método subscribe
    this.citaService.getPosts().subscribe((res) => {

       //prueba de como es el formato del array Posts
       /* this.Posts = [
         {id:"1", "title":"titulo de prueba", "content":"contenido de prueba", "author":"author de prueba"}
        ]  */

      this.citas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Cita)
        };
      });

      console.log(this.citas)
    });


  }

  deleteRecord = (cita) => this.citaService.deletePost(cita);

}
