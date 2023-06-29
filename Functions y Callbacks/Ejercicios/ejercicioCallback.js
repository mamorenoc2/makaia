const array1 = [
    {
        nombre: 'Ana',
        apellidos: 'Ramirez',
        telefono: '1',
    },
    {
        nombre: 'Andrea',
        apellidos: 'Gonzales',
        telefono: '2',
    },
    {
        nombre: 'Andrés',
        apellidos: 'Parra',
        telefono: '3',
    },
    {
        nombre: 'Leidy',
        apellidos: 'Muñoz',
        telefono: '4',
    },
    {
        nombre: 'Diana',
        apellidos: 'Loaiza',
        telefono: '5',
    }
]

const funcionCallback = (newArr) => {
    newArr.forEach(element => {
        console.log(`${element.nombre} ${element.apellidos}`)
    });
}


const ejercicio3 = (arr, funcion) => {
    const tempArr = [];
    arr.forEach((element) => {
       if(!element.nombre.startsWith('A')){
            tempArr.push(element)
       } 
    });
    funcion(tempArr);
}

//ejercicio3(array1, funcionCallback)