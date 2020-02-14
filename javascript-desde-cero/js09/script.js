/* Array 
.length : cantidad de elementos que tiene un array
*/
/* desestructuracion: nos permite evaluar valores en una sola linea */
let arra5 = ["Hola", "amigos", "de", "EDteam"]
let [s1, s2, s3, s4] = arra5
console.log(s1, s2, s3, s4)

/* .push: agregar un valor como nuevo elemento*/
let arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)

/* .pop: quita y retorna el ultimo elemento */
arr.pop()
console.log(arr)

/* .unshift: agrega un valor y retorna nuevo elemento al inicio del array */
arr.unshift('Nuevo')
console.log(arr)

/* .shift: elimina y retorna el primer valor */
arr.shift()
console.log(arr)

/* .splice(startIndex,quantity,value1,value2,...): eliminar el array y modifican al array original */
let arr2 = ['Peru', 'Colombia', 'Mexico', 'Bolivia']
arr2.splice(2, 0, 'Chile', 'Ecuador')
console.log(arr2) // peru, colombia, chile, ecuador, mexico, bolivia

arr2.splice(4, 1, 'Costa Rica')
console.log(arr2) // peru, colombia, chile, ecuador, costa rica, bolivia

arr2.splice(1, 1)
console.log(arr2) //Elimina colombia

/* .slice(start,[.end]) */

/* .slice(start [.end]): no modifica al array original */
arr2.slice(2, 4)
console.log(arr2)
console.log(arr2.slice(2, 4))

/* Metodos */
/* .reverse() */
let ejemplo = 'Hola mama'
console.log(ejemplo.split(''))
console.log(ejemplo.split('').reverse())
console.log(ejemplo.split('').reverse().join(''))

const reverseText = string => string.split('').reverse().join('')
console.log(reverseText('JavaScript'))

let saludo = reverseText('Hoy nos encontramos a la 1pm en la plaza')
console.log(saludo)
console.log(reverseText(saludo))

/* .sort() : ordena un array*/
let arr3 = ['B', 'A', 'Z', 'F']
console.log(arr3.sort())
console.log(arr3.sort().reverse())

/* no funciona con numeros */
let numbers = [10, 100, 1000, 2, 20, 35, 45]
console.log(numbers.sort())
numbers.push(300)
console.log(numbers.sort())

/* se soluciona usando callback */
console.log(numbers.sort((a, b) => a - b))

/*  .join(): convierte el array a un string usando el separador que le pones en el parametro */
console.log(numbers.join(' '))

/* .concat(): Recibe como parámetro un array o una lista tiene la misma funcion del .push() pero puede agregar varios valores*/
let number2 = [99, 999, 8976]
console.log(numbers.concat(number2))

/* Encontrar elementos */
/* .indexOf(value): encuentra el elemento buscado y te retorna su indice */
console.log(numbers.indexOf(45));

/* .find(callback):  devuelve el valor del primer elemento de la funcion que ejecutes*/
console.log(numbers.find(number => number > 100)) // 300
    /* .findIndex(callback):  devuelve el indice del primer elemento de la funcion que ejecutes*/
console.log(numbers.findIndex(number => number > 100))

/* Eliminar elementos duplicados de un Array */
numbers.push(10)
console.log(numbers)

let numeros = [...new Set(numbers)]
console.log(numeros)

const removeDuplicates = array => [...new Set(array)]
console.log(removeDuplicates(['a', 'b', 'a']))

/* Hallar el mayor y menor de un array */
let number3 = [10, 20, 30, 1]

console.log(Math.min(...number3))
console.log(Math.max(...number3))

/* Recorrer un Array */
let teachers = ['adrian', 'beto', 'carlos', 'denis', 'edwin', 'flavia']
for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i])
}

for (let teacher of teachers) {
    console.log(teacher)
    console.log(teachers.indexOf(teacher))
}

teachers.forEach((el, i, arr) => {
    console.log(el)
    console.log(i)
    console.log(arr)
});

let arr4 = []
let numbers2 = [5, 6, 9, 4, 3]
numbers2.forEach(el => {
    arr4.push(el * el)
})
console.log(arr4)

/* .some(callback) Recorre todo el array y verifica si al menos un elemento tenga esa condicion ejecuta true o false */
console.log(teachers.some(el => el === 'beto'))

/* .every(callback) Recorre todo el array y verifica si que todos los elemento contengan esa condicion ejecuta true o false */
console.log(teachers.every(el => el.includes('a')))

console.log(teachers.every(el => el.length >= 3))

/* Metodos 
Nunca modifican el array actual*/
/* .map(callback): Transforma todos los elemetnos del array */
console.log(numbers.map(el => el * el))

/* .filter(callback): Filtra los elementos que cumplan con la condicion */
let otherArray = numbers.filter(el => el > 5)
console.log(otherArray)

/* .reduce(callback): Reduce todos los elementos a un único valor */
let sum = numbers.reduce((a, b) => a + b)
console.log(sum)