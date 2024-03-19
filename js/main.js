const pantalla = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn");
const noRepeatIcon = document.querySelectorAll('.operation-icons')

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent ="Syntax Error";
            }
            return;
        }
        if (pantalla.textContent.length >= 13 || (pantalla.textContent === "0" && isNaN(parseInt(botonApretado)))) {
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Syntax Error"){
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        })

})

noRepeatIcon.forEach(icon => {
    icon.addEventListener("click", () =>{
        //TODO
    })
});
