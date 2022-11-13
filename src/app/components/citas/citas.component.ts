import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CitaService } from '../../cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',

})
export class CitasComponent implements OnInit {

  public citaForm:FormGroup; //creamos una variable publica del tipo FormGroup

  constructor(
    public postService:CitaService,
    public formBuilder:FormBuilder,
    public router:Router
  ) {
    this.citaForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      direccion: [''],
      tipo: [''],
      descripcion: ['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.citaForm.value)
    console.log("Se guardó" , this.citaForm.value)
    this.router.navigate(['/showCitas'])
  }



}
