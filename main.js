function cambiar(imagen){
    let img = document.querySelector("img");
    let titulo = document.querySelector("#titulo")
    img.style.width="50%"

    switch (imagen){
        case 1:
            img.src ="./imagenes/1.jfif";
            titulo.style.color="red";
            break;
        case 2:
            img.src ="./imagenes/2.jfif";
            titulo.style.color="green";
            break;
        case 3:
            img.src ="./imagenes/3.jfif";
            titulo.style.color="blue";
            break;
        default:
            alert(imagen);
    }
}