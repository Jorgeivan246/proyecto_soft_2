import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

import { Post } from 'src/app/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore:AngularFirestore) { }

  getPosts() {
    return this.angularFirestore
            .collection("posts")
            .snapshotChanges()
  }

  getPostById(id) {
    return this.angularFirestore
            .collection("posts")
            .doc(id)
            .valueChanges()
  }


  createPost(post:Post)
  {
      return new Promise <any>((__resolve,reject) => {
        this.angularFirestore
        .collection("posts")
        .add(post)
        .then( (response) =>{

          console.log(response)
        },
        (error) =>{
          reject(error)
        })

      })

  }

  updatePost(post:Post,id)
  {
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .update({

      nombre: post.nombre,
      descripcion:post.descripcion,
      precio:post.precio,
      unidades_dispo:post.unidades_dispo


    });
  }

  deletePost(post) {
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete();
  }
}
