//Gestor de Inventario de una Tienda
//Tienes un array de productos de una tienda, cada uno con información sobre su nombre, categoría, precio, cantidad en inventario y descuento. Tu tarea es trabajar con este inventario utilizando programación funcional y estructuras de control.
//Array

const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];

//1.Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos que tienen un descuento aplicado (es decir, discount > 0).
//filter
//ejemplo:
//const array=[1,2,3,4,5,6,7]
//const resultArray=array.filter(element=> element===3 || element ===7)
//console.log(resultaArray)

const productoDescuento=products.filter(products => products.discount > 0)
console.log(productoDescuento)

//2.Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.
//map
//consta array=[1,2,3,4,5,6,7]
//const resultArray=array.map(element=>element+10)
//console.log(resultArray)

const priceAfterDiscount=products.map(products=>{
    const calcDiscount=(products.price*products.discount)/100;
    return products.price-calcDiscount;
})
console.log(priceAfterDiscount)

//3.Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.
//bucle FOR productos con -5 unidades (stock < 5)
//for (let i=0; i<9; i++){
//n+=i;
//mifuncion(n);
//}

const bajoStock=[] // este es el array que almacenará los productos con stock<5
index=0 //donde empieza el índice
for (i=0;i<products.length;i++){
    if (products[i].stock<5){
        bajoStock[index]=products[i];
        index++;
    }
}
console.log(bajoStock)

//4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre de un producto y una cantidad a agregar. Usa un try...catch para verificar si el producto existe en el array. Si existe, incrementa su stock; si no, lanza un error.

function actualizaStock(name, quantity){
    try {
        const product=products.find(product=>product.name===name);

        
      } catch (error) {
        
      }
}
actualizaStock();

//5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría (electrónica, hogar, alimentos) y devuelve un objeto con este resumen.

const resumenCategoria={};
i=0
for (i=0;i<products.length;i++){
    category=products[i].category;
    if (resumenCategoria[category]){
        resumenCategoria[category]++;
    }else{
        resumenCategoria[category]=1;
    }
}
console.log(resumenCategoria);













