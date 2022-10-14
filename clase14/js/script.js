const productos = [
    {
        name: "Celeron",
        modelo: "J192",
        precio: 4000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "Pentium",
        modelo: "X4",
        precio: 10000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I5",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I3",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I9",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
]

const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")


//Template strings

const crearPlantilla = (producto) =>{
    return `<div class="carta">
                <h2>${producto.name}</h2>
                <img src="${producto.thumbnail}" class="imgCard" >
                <p>Modelo: ${producto.modelo}</p>
                <p>Precio: ${producto.precio}</p>
            </div>` 
}

for( let producto of productos ){
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
}

