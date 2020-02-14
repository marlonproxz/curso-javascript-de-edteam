/* CREAR ELEMENTOS 
createElement()
createDocumentFragment(): nos permite guardar elementos en memoria, guardar estructuras html en memoria antes de pintarlos,
eso mejora mucho el rendimiento
es como un elemento en el DOM pero vive en memoria
*/

const teachers = ['Alexys', 'Beto', 'Alvaro', 'Daniel', 'Jon']
const teacherList = document.createElement('ul')
const teacherListContainer = document.getElementById('teacher-list')

// const teacherListFragment = document.createDocumentFragment()

teacherListContainer.appendChild(teacherList)

for (let teacher of teachers) {
    const li = document.createElement('li')
    teacherList.appendChild(li)
    li.textContent = teacher
}

// for (let teacher of teachers) {
//     const li = document.createElement('li')
//     teacherListFragment.appendChild(li)
//     li.textContent = teacher
// }

// teacherList.appendChild(teacherListFragment)