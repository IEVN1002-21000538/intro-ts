interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    curso:string;
    direccion?:string//dqato opcional para que no marque error al emparejar
}


const alumno:Alumno={
    nombre:"juan",
    apellido:"Lopez",
    edad:32,
    curso:"ingles",
    //direccion:""
}

console.table(alumno)

let mascotas=['perro','gato','perico'];

console.log(mascotas[0]);
mascotas[1]='nuevo gato';
mascotas.push('hamster');
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)

