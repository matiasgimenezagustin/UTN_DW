

const URLSWAPI = "https://swapi.dev/api/vehicles/"
const URLHPAPI = "https://hp-api.herokuapp.com/api/characters"
const vehiculos = []
const imagenes = []

const contenedorHTML = document.getElementById("contenedor")




const crearPlantilla = (vehiculo) =>{
    return `<div class="carta">
                <h2>${vehiculo.name}</h2>
                <img src=${vehiculo.image}>
                <a href=${vehiculo.image}>link to</a>
                <p>Modelo: ${vehiculo.model}</p>
                <p>Precio Republica: ${vehiculo.cost_in_credits}</p>
            </div>` 
}


const renderizarVehiculos = (listaVehiculos) =>{
    if(listaVehiculos.length !== 0){
        contenedorHTML.innerHTML = ""
        for( let vehiculo of listaVehiculos ){
            contenedorHTML.innerHTML += crearPlantilla(vehiculo)
        }
    }else{
        contenedorHTML.innerHTML = `<h1>No existen productos con esas especificaciones</h1>`
    }
    
}


fetch(URLSWAPI)
            .then( respuesta => respuesta.json())
            .then(  respuestaJS =>{
                
                respuestaJS.results.forEach((vehiculo) => vehiculos.push(vehiculo) )
                
                fetch(URLHPAPI)
                    .then( res => res.json())
                    .then( data =>{
                        console.log(data[1].image)
                        for(let i = 0; i < vehiculos.length; i++){
                            vehiculos[i].image = data[i].image
                        }
                        
                        renderizarVehiculos(vehiculos)
                    } )

            })

