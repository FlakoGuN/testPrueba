import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Datos } from './datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  filterPost = '';
  datos:Datos[] =[];
  constructor(private data:DataService, private fB:FormBuilder) {
    console.log(data);
    
   }
  ngOnInit(): void {
    this.datos = this.data.getData();
    console.log(this.datos);
    this.formValues = this.fB.group({
      nombre:  new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      descripcion: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      
    });

  }
  searchTerm: string | undefined;
  datoModelObject: Datos = new Datos();
  formValues!: FormGroup;
  filtroNombre = '';
  datosFiltrados = this.datos;

  
  filtrarDatos() {
    this.datosFiltrados = this.datos.filter(dato => dato.nombre.includes(this.filtroNombre));
  }

  agregarDato() {if (this.formValues.valid) {
    this.datos.push({ nombre: this.formValues.value.nombre, descripcion: this.formValues.value.descripcion });
    this.formValues.reset();
  }else {
    alert('Ingrese Valores');
  }
  } 

  eliminarDato(index:number) {
    this.datos.splice(index,1);
  }
  
}
