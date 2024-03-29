import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {
  public postForm:FormGroup; //creamos una variable publica del tipo FormGroup

  constructor(
    public postService:PostService,
    public formBuilder:FormBuilder,
    public router:Router
  ) {
    this.postForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      unidades_dispo: ['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value)
    this.router.navigate([''])
  }
}
