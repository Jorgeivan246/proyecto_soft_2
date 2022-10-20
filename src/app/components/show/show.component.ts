import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent implements OnInit {

  Posts: Post[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    //console.log(this.postService.getPosts()) //traemos un observable


    //Subscribe() es un método que conecta el observer con eventos observable. Siempre que se realiza algún cambio en estos observables, se ejecuta un código y observa los resultados o cambios mediante el método subscribe
    this.postService.getPosts().subscribe((res) => {

       //prueba de como es el formato del array Posts
       /* this.Posts = [
         {id:"1", "title":"titulo de prueba", "content":"contenido de prueba", "author":"author de prueba"}
        ]  */

      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });

      console.log(this.Posts)
    });


  }

  deleteRecord = (post) => this.postService.deletePost(post);
}
