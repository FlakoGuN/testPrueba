import { Injectable } from '@angular/core';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
 private datas:Datos[] = [
    { nombre: 'Post 1', descripcion: 'Descripción del post 1' },
    { nombre: 'Post 2', descripcion: 'Descripción del post 2' },
    { nombre: 'Otro post 3', descripcion: 'Descripción del post 3' },
    { nombre: 'Posteo 4', descripcion: 'Descripción del post 4' },
    { nombre: 'El nuevo Posteo 5', descripcion: 'Descripción del post 5' }
  ];

  

  getData() {
    return this.datas;
  }
}
