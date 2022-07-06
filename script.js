// una profesora ingresa nombre, apellido, y 4 notas de cada uno de sus alumnos, y en consola se podrán ver promedios de notas o si el alumno aprobó o desaprobó


// OBJETO ALUMNO
class Alumno{
    constructor(nombre, apellido, nota1, nota2, nota3, nota4){
        this.nombre = nombre
        this.apellido = apellido
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
        this.promedio = (this.nota1 + this.nota2 + this.nota3+ this.nota4 ) / 4
    }
    mostrarPromedio(){
        console.log(`El promedio de  ${this.nombre} ${this.apellido} es ${this.promedio}`)
    }
    mostrarSiAprobo(){
        if (this.promedio >= 6){
            console.log(`${this.nombre} ${this.apellido} - Aprobado`)
        } else{
            console.log(`${this.nombre} ${this.apellido} - Desaprobado`)
        }
    }
}

//FUNCION PARA VER SI LA NOTA ES UN STRING, O SI ES MENOR A 0 O MAYOR A 11
function verificarnota(numero){
    do{
        nota = parseFloat(prompt(`Ingrese la nota que obtuvo en la evaluación ${numero}`))
    
    if (isNaN(nota) || (nota >=11) || (nota<=0)){
        alert("Ingrese un número del 1 al 10")
    }
}while ((isNaN(nota)) || (nota >=11) || (nota<=0))

return nota
}

//FUNCION PARA VERIFICAR QUE EL USUARIO INGRESÓ SI O NO
function verificarSiNo(){
do{
    consulta = (prompt("Desea agregar a un alumno ? Si | No")).toLowerCase()
    if ((consulta != "si") && (consulta != "no")){
        alert ("Error, intente nuevamente")
    }
} while((consulta != "si") && (consulta != "no"))
return consulta

}


const arrayAlumnos = []
let nota1, nota2, nota3, nota4

//INGRESAR DATOS

do{
    nombre = (prompt ("Ingrese nombre del Alumno"))
    apellido = (prompt("Ingrese apellido del Alumno"))
    nota1 = verificarnota(1)
    nota2 = verificarnota(2)
    nota3 = verificarnota(3)
    nota4 = verificarnota(4)
    consulta = verificarSiNo()
    arrayAlumnos.push(new Alumno (nombre, apellido, nota1, nota2, nota3, nota4))
} while(consulta == "si")

//MOSTRAR RESULTADO DE PROMEDIO O APROBADO/DESAPROBADO

do{
    consulta = parseFloat(prompt("Si desea ver el promedio de cada alumno ingrese 1\n Si desea ver en formato Aprobado/Desaprobado ingrese 2 \n El resultado se verá en consola"))
    if(consulta === 1){
        for(Alumno of arrayAlumnos ){
        Alumno.mostrarPromedio()
        }
    } else if (consulta === 2){
        for(Alumno of arrayAlumnos ){
        Alumno.mostrarSiAprobo()
        }
    } else{
        alert("Error, ingrese un número válido")
    }
} while ((consulta !== 1) && ( consulta!== 2))



