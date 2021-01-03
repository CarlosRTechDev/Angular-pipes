import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Capitán América';
  
  nombre2:string = 'cArLoS roSaLeS';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  porcentaje:number = 0.234;

  salario:number = 1234.5;

  fecha:Date = new Date();

  videoUrl:string = 'https://www.youtube.com/embed/EHI7SLiIT18';

  activar:boolean = true;


  valorPromesa = new Promise<string>( (resolve) => {
  //tiempo en que se mostrará el mensaje; 4500 = 4.5seg 
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }


}
