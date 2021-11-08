function detalles(e,name,abilities,weight,weakness,number,height,type){   
    console.log("Entré");
    let nombrePokemon = document.getElementById("nombrePokemon");
    nombrePokemon.innerHTML = name;
    let habilidadesPokemon = document.getElementById("abilities");
    habilidadesPokemon.innerHTML = abilities;
    let pesoPokemon = document.getElementById("weight");
    pesoPokemon.innerHTML = weight;
    let debilidadesPokemon = document.getElementById("weakness");
    debilidadesPokemon.innerHTML = weakness;
    let numeroPokemon = document.getElementById("number");
    numeroPokemon.innerHTML = number;
    let alturaPokemon = document.getElementById("height");
    alturaPokemon.innerHTML = height;
    let tipoPokemon = document.getElementById("type");
    tipoPokemon.innerHTML = type;
    console.log(type);
    console.log(height);
    e.preventDefault();
}


function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'Pokemons.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            
            let listPok = document.createElement('div');
            listPok.setAttribute("Id", `contenedor`);
            document.body.appendChild(listPok);
            listPok.style.display = "flex";
            listPok.style.flexDirection = "row";
            listPok.style.flexWrap = "wrap";
            let cont = 0;
            for(let item of datos){
                let divFoto = document.createElement('div');
                divFoto.setAttribute("Id", `Div${cont}`);
                /* divFoto.style.cursor = "pointer"; */
                divFoto.style.maxWidth = "215px";
                divFoto.style.height = "auto";
                divFoto.style.width = "30%"
                divFoto.style.justifyContent ="center";
                divFoto.style.margin = "1rem 1rem";
                divFoto.style.backgroundColor = "#bafce6";

                let elemento = [];

                for(let i = 0; i < item.type.length; i++){
                    elemento[i] = document.createElement('img');
                    elemento[i].style.margin = "5px 5px";
                    switch(item.type[i]){
                        case "grass":
                            elemento[i].setAttribute("src","https://img.icons8.com/ios-glyphs/30/000000/grass.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "poison": 
                            elemento[i].setAttribute("src", "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/000000/external-poison-circus-kiranshastry-solid-kiranshastry.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "fire":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/fire-element--v1.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "psychic":
                            elemento[i].setAttribute("src", "https://img.icons8.com/metro/30/000000/crystal-ball.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "flying":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-filled/30/000000/wings.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "ice":
                            elemento[i].setAttribute("src", "https://img.icons8.com/fluency-systems-filled/30/000000/ice-icon.png");
                            divFoto.appendChild(elemento[i]);
                            break;    
                        case "water":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/water.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "ground":
                            elemento[i].setAttribute("src", "https://img.icons8.com/fluency-systems-filled/30/000000/soil.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "rock":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-filled/30/000000/coal.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "electric":
                            elemento[i].setAttribute("src", "https://img.icons8.com/material-outlined/30/000000/lightning-bolt--v1.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "dragon":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-filled/30/000000/dragon.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "bug":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/bug--v1.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "normal":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-filled/30/000000/normal-screen.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "ghost":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/ghost--v1.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "dark":
                            elemento[i].setAttribute("src", "https://img.icons8.com/material-rounded/30/000000/partly-cloudy-night.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "steel":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-filled/30/000000/gold-bars.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "fairy":
                            elemento[i].setAttribute("src", "https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/30/000000/external-fairy-fairy-tale-tulpahn-basic-outline-tulpahn.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        case "fighting":
                            elemento[i].setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/forward-punch.png");
                            divFoto.appendChild(elemento[i]);
                            break;
                        default:
                            console.log(item.type[i]);
                    }
                }



                let imag = document.createElement('img');
                imag.setAttribute("src", item.ThumbnailImage);
                let name = document.createElement('p');
                name.setAttribute("id", `pName${cont}`);
                name.innerHTML = item.name;
                listPok.appendChild(divFoto);
                divFoto.appendChild(imag);
                divFoto.appendChild(name);

                let divBoton = document.createElement("div");
                divBoton.style.display = "flex";
                divBoton.style.justifyContent ="center";
                divBoton.style.margin = "1rem";

                let boton = document.createElement("input");
                boton.setAttribute("type", "button");
                boton.setAttribute("class","btn btn-success");
                boton.setAttribute("value", "Más");
                boton.setAttribute("onclick", `detalles(event, "${item.name}",
                    "${item.abilities}", "${item.weight}", "${item.weakness}", "${item.number}",
                    "${item.height}", "${item.type}")`);
                boton.setAttribute("data-bs-toggle","modal");
                boton.setAttribute("data-bs-target","#divModal");
                boton.style.cursor = "pointer";
                boton.style.textAlign = "center";

                divFoto.appendChild(divBoton);
                divBoton.appendChild(boton);

                
                
                cont++;
            }
            
        }
    }
}

function buscar(e){
    e.preventDefault();
    console.log("Busco");
    let nombreABuscar = document.getElementById("busqueda").value;
    let parrafoNombre;
    console.log(nombreABuscar);

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'Pokemons.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = 0;
            
            for(let i = 0; i < datos.length; i++){
                parrafoNombre = document.getElementById(`pName${i}`).textContent;
                if(parrafoNombre !== nombreABuscar){
                    document.getElementById(`Div${i}`).style.display = "none";
                }
            }
        }
    }
    
}