const productos = [
    {
        name: "Celeron",
        modelo: "J192",
        precio: 5500,
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
        precio: 7000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I3",
        modelo: "10000Gen",
        precio: 15000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I9",
        modelo: "10000Gen",
        precio: 19000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
]
//Llamo a elementos de html por js, medidante el DOM (objeto document)
const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")

const formulario = document.getElementById("formulario")


formulario.addEventListener("submit", (e)=>{
    //Prevenimos el comportamiento por defecto del formulario
    e.preventDefault()

    const newProduct = {
        name: formulario.name.value,
        modelo: formulario.modelo.value,
        precio: parseFloat(formulario.precio.value),
        thumbnail: formulario.thumbnail.value,
    }
    productos.push(newProduct)

    formulario.name.value = formulario.modelo.value = formulario.precio.value = formulario.thumbnail.value = ""
    renderizarCartas(productos)
})


//Template strings

const crearPlantilla = (producto) =>{
    return `<div class="carta">
                <h2>${producto.name}</h2>
                <img src="${producto.thumbnail}" class="imgCard" >
                <p>Modelo: ${producto.modelo}</p>
                <p>Precio: ${producto.precio}</p>
            </div>` 
}



const renderizarCartas = (listaProductos) =>{
    if(listaProductos.length !== 0){
        contenedorDeProductosHTML.innerHTML = ""
        for( let producto of listaProductos ){
            contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
        }
    }else{
        contenedorDeProductosHTML.innerHTML = `<h1>No existen productos con esas especificaciones</h1>`
    }
    
}


//filtro de precio
/* const productosFiltrados = productos.filter((producto) => producto.precio < 6000) */
renderizarCartas(productos)

const filterProducts = ( listaProductos, price ) =>{

    //devuelva un array con los productos fitrados

    return listaProductos.filter((producto) => producto.precio <= price)
}

const priceToFilterOptions = document.getElementById("priceToFilter")

priceToFilterOptions.addEventListener("change",  () =>{
    console.log("se cambio el filtrador")

    if(priceToFilterOptions.value !== ""){
        let precioAFiltrar = parseFloat(priceToFilterOptions.value)
        renderizarCartas(filterProducts(productos, precioAFiltrar))
    }else{
        renderizarCartas(productos)
    }
})