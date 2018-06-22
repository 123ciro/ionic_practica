



export class Alumnos {


    nombre: string = null;
    apellido: string = null;
    edad: number = null;
    profesion: String = null;
    telefono: String = null;
    fecha_nacimiento: Date = null;
    especialidad:string =null;
    avatar: string=null;
    email: string =null;

    constructor(id: number, nombre: string, apellido: string, edad: number,profesion:string,telefono:string,fecha_nacimiento:Date,especialidad:string,avatar:string,email:string ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion=profesion;
        this.telefono=telefono;
        this.fecha_nacimiento=fecha_nacimiento;
        this.especialidad=especialidad;
        this.avatar=avatar;
        this.email=email;
        
    }

   


    

}