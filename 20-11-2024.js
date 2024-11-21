
let datos=[
    {
        id:1,
        nombre:"Redu"
    }
]
//Primero se llama a leerDatos, pero no lo tenemos ahora mismo, por eso el resultado en undefined
// let leerDatos= ()=>{
//     setTimeout(()=>{
//         return datos;
//     },2000);
// }

// console.log(leerDatos());

//SOLUCIONES
//1.callback
//2. AJAX
//3. USO DE PROMESAS (Se usan cuando no sabes cuanto tiempo va a tardar algo, ej:BD)

// let promesa=new Promise((resolve,reject)=>{
//     resolve("tus datos");
// });

// //Si ejecuta la promesa entonces ...
// promesa.then(function(dato){ //Ese dato es el contenido del resolve
//     console.log(dato);
// })


//otro ejemplo

// let promesa=new Promise((resolve,reject)=>{//La promesa lleva dentro un callback, es decir una función anónima, que lleva como parámetros si se resuelve (favorablemente o no) o se rechaza
//     let cond=false;
//     setTimeout(()=>{
//         if(cond){
//             resolve("darte dinero"); //lo que te promete la promesa
//         }else{
//             reject("Me han pillado robando");
//         }
//     },5000); //en 5s
// })

// //Si ejecuto la promesa, entonces...
// promesa.then((loPrometido)=>{//Lleva dentro otro callback //Si se cumple (resolve)
//     console.log(loPrometido);
// })
// .catch((error)=>{//Si no se cumple (reject)
//     console.log(error);
// })


//SOLUCIÓN AL PRIMER PROBLEMA:
// let leerDatos= ()=>{
//     setTimeout(()=>{
//         return datos;
//     },2000);
// }

// console.log(leerDatos());
//SOLUCIÓN
let leerDatos=new Promise((resolve)=>{
    //Hacemos el sttimeout para simular que tarda la entrega de datos desde la BD
    setTimeout(() => {
        resolve(datos);
    }, 2000);
})

//Si tengo la promesa cumplida(que me da una respuesta), se hace...
leerDatos.then((datos)=>{
    console.log(datos);
})

//LAS PROMESAS HOY EN DÍA NO SE USA ASÍ, SE UTILIZA CON EL FETCH
