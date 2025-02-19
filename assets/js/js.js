const seccinSabore = document.querySelector("#btm_seleccion");

seccinSabore = document.addEventListener("click", ()=>{

    const platos = document.querySelector(".container_article__2")
    if(platos){
        platos.scrollIntoView({behavior:"smooth"});
    }
})
