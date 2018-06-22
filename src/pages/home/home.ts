import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alumnos } from '../../models/alumnos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

 
  titulo: string = "Inicio";

  alumnos = [

    {
      nombre: "Fatima",
      apellido: "Gonzales",
      edad: "19",
      profesion: "Estilista",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"
      
    },

    {
      nombre: "Martin",
      apellido: "Ferrario",
      edad: "17",
      profesion: "Contador",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Eletrcidad",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"


    },
    {
      nombre: "Victor",
      apellido: "Larre",
      edad: "12",
      profesion: "Ingeniero",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Mecanica",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"



    },
    {
      nombre: "Marta",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Electronica",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Lorena",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Mecanica",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"

    },
    {
      nombre: "Yanina",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Peluqueria",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Claudia",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Manicura",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Javier",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Plomero",
      email:"example@gmail.com",

      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Enrique",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Contador",
      email:"example@gmail.com",

      
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Fatima",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Diseño",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Luis",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      email:"example@gmail.com"
,
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Ciro",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      email:"example@gmail.com",

      
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Lucas",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1982",
      especialidad:"Sin definir",
      email:"example@gmail.com",

      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Ian",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      email:"example@gmail.com",
      especialidad:"Sin definir",
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Fatima",
      apellido: "Gonzales",
      edad: "19",
      profesion: "Estilista",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"
      
    },

    {
      nombre: "Martin",
      apellido: "Ferrario",
      edad: "17",
      profesion: "Contador",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Eletrcidad",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"


    },
    {
      nombre: "Victor",
      apellido: "Larre",
      edad: "12",
      profesion: "Ingeniero",
      telefono: "0972-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Mecanica",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"



    },
    {
      nombre: "Marta",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Electronica",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Lorena",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Mecanica",
      avatar:"assets/img/hombre.jpg",
      email:"example@gmail.com"

    },
    {
      nombre: "Yanina",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Peluqueria",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Claudia",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Manicura",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Javier",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Plomero",
      email:"example@gmail.com",

      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Enrique",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Contador",
      email:"example@gmail.com",

      
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Fatima",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Diseño",
      avatar:"assets/img/mujer.jpg",
      email:"example@gmail.com"

      
    },
    {
      nombre: "Luis",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      email:"example@gmail.com"
,
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Ciro",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      especialidad:"Informatica",
      email:"example@gmail.com",

      
      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Lucas",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1982",
      especialidad:"Sin definir",
      email:"example@gmail.com",

      avatar:"assets/img/hombre.jpg"
    },
    {
      nombre: "Ian",
      apellido: "Arzamendia",
      edad: "15",
      profesion: "Mecanico",
      telefono: "0974-165244",
      fecha_nacimiento: "05/04/1992",
      email:"example@gmail.com",
      especialidad:"Sin definir",
      avatar:"assets/img/hombre.jpg"
    }
    

  ]


  //BUSCADOR POR NOMBRE 
  //Obs: El siguiente buscador, busca muy bien, pero despues de borrar la busqueda ya no trae 
  //ningun dato que se encuentra cargado. REVISAR BIEN!!


  getAlumno(ev){
    this.alumnos;
    var val=ev.target.value;
    if (val&& val.trim() != ''){
      this.alumnos=this.alumnos.filter((alumno) =>{
        return (alumno.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    } 
  }

  //Infinite Scrool


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        
        
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  constructor(public navCtrl: NavController, public NavParams: NavParams) { }


  
  openDetalle(alumno) {

    this.navCtrl.push('AlumnosDetallePage', alumno);
  }

}



