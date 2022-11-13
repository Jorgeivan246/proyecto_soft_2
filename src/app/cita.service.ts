import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CitasComponent } from './components/citas/citas.component';



import { Cita } from 'src/app/citas.model';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private angularFirestore:AngularFirestore) { }

  getPosts() {
    return this.angularFirestore
            .collection("citas")
            .snapshotChanges()
  }

  getPostById(id) {
    return this.angularFirestore
            .collection("citas")
            .doc(id)
            .valueChanges()
  }


  createPost(citas:Cita)
  {
      return new Promise <any>((__resolve,reject) => {
        this.angularFirestore
        .collection("citas")
        .add(citas)
        .then( (response) =>{

          console.log(response)
        },
        (error) =>{
          reject(error)
        })

      })

  }

  updatePost(citas:Cita,id)
  {
    return this.angularFirestore
    .collection("citas")
    .doc(id)
    .update({

      nombre: citas.nombre,
      apellido:citas.descripcion,
      direccion:citas.direccion,
      tipo:citas.tipo,
      descripcion:citas.descripcion


    });
  }

  deletePost(cita) {
    return this.angularFirestore
    .collection("citas")
    .doc(cita.id)
    .delete();
  }
}
