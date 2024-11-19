let promesa = new Promise((resolve, reject) => {
    let resuelto = true;
    if (resuelto) {
        resolve("tus datos");
    } else {
        reject("Lo siento no tengo datos");
    }
})
promesa.then(datos => console.log(datos));