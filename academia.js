"use strict"
/**
 * @fileOverview
 * @author Alzan Martinez
 * @version 1.0
 */

 /**
  * @description Funcion que devuelve los nombres de los alumnos
  * @param {array} listaAlumnos array que contiene objetos alumno
  * @return {array} array que contiene todos los nombres de los objetos alumno, o null si no encuentra ninguno
  */
function NombreAlumnos(listaAlumnos) {
    let nombres = [];
    for (let alumno of listaAlumnos) {
        nombres.push(alumno.nombre); 
    }
    return nombres;
}
/**
  * @description Función que nos devuelve un objeto alumno que tenga el nombre que se le indica
  * @param {array} listaAlumnos Array que contiene objetos alumno
  * @param {string} Nombre Nombre que queremos buscar en el array de objetos alumno
  * @return {objAlumno} Devuelve el objeto alumno que tenga ese nombre, o null si no lo encuentra
  */
function buscarAlumno(nombre, listaAlumnos) {
    for (let alumno of listaAlumnos) {
        if (alumno.nombre == nombre) {
            return alumno;
        }
    }
    return null;
}

/**
  * @description Función que nos devuelve el nombre completo de un objeto alumno
  * @param {objAlumno} alumno Objeto alumno del que queremos sacar el nombre completo
  * @return {string} Devuelve el nombre completo del alumno indicado
  */
//función que nos devuelve el nombre completo de un alumno
//recibe como parametro un objeto alumno
function nombreCompleto(alumno) {
    let nombre = "";
    nombre = alumno.nombre;
    for (let apellido of alumno.apellidos) {
        nombre = nombre + " " + apellido;
    }
    return nombre;
}

/**
  * @description Función que nos devuelve la lista de alumnos que pertenecen al curso indicado
  * @param {string} curso Nombre del curso en el que queremos buscar alumnos
  * @param {array} listaAlumnos Array que contiene objetos alumno
  * @return {array} Devuelve la lista de objetos alumno que pertenecen a dicho curso, o null si no encuentra ninguno
  */
//función que devuelve los alumnos que pertenecen a determinado curso
function alumnosCurso(curso, listaAlumnos) {
    let alumnosCurso = [];
    for (let alumno of listaAlumnos) {
        if (alumno.curso == curso) {
            alumnosCurso.push(alumno);
        }

    }
    return alumnosCurso;
}

/**
  * @description Función que nos devuelve la lista de alumnos que cursan la asignatura indicada
  * @param {string} asignatura Nombre de la asignatura de la que queremos buscar alumnos
  * @param {array} listaAlumnos Array que contiene objetos alumno
  * @return {array} devuelve la lista de alumnos que cursan esa asignatura, o null si no encuentra ninguno
  */
//Función que devuelve los alumnos matriculados en la asignatura
//que pasamos como parámetro
function alumnosAsignatura(asignatura, listaAlumnos) {
    let alumnosAsignatura = [];

    //Completar código

    return alumnosAsignatura;
}


//////////////////////////EMPIEZA EL PROGRAMA//////////////////////////////////////////

console.log("Empieza el programa");
let fs = require("fs");
let alumnos = fs.readFileSync("alumnos.json","utf-8");
let alumnosArray=JSON.parse(alumnos);

console.log("El número de alumnos del ficheros es: "+alumnos.length);

console.log("Los nombres de los alumnos matriculados son:");
//let nombres_de_alumnos=NombreAlumnos(alumnosArray);

console.log("Voy a comprobar si hay una alumna llamada Olivia")
//let alumno=buscarAlumno("Olivia",alumnosArray); //Como no hay tendría que mostrar null
//console.log(alumno);

console.log("Voy a comprobar si hay un alumno llamado Pedro");
//let alumno=buscarAlumno("Pedro",alumnosArray); //Como si lo hay tendría que mostrar el alumno Pedro
//console.log(alumno);


console.log("Ahora voy a mostrar el nombre completo de Pedro");
let alumno=buscarAlumno("Pedro",alumnosArray); //Es necesario que buscarAlumno funcione bien
let nombre_completo=nombreCompleto(alumno);
console.log(nombre_completo);
/*
console.log("Alumnos de Primero")
let alumnos_primero=alumnosCurso("primero",alumnosArray);
console.log(alumnos_primero);
*/