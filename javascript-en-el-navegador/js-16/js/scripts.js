/* Templates (HTML) */
const template = document.getElementById('template')

const myNewTemplate = template.content.cloneNode(true)

myNewTemplate.querySelector('h2').textContent = 'EDteam'
myNewTemplate.querySelector('p').textContent = 'Tu futuro te está esperando'

document.getElementById('content').appendChild(myNewTemplate)

/* Esto nos permite crear templates mas complejos ponganse que vamos a dibujar
cars de cursos que siguen la misma estructura, como todos siguen con la misma estructura,
podemos crear un template asi vacio y luego ir llenandolo hariamos un ciclo, atraves
de un ciclo resibiriamos datos de una bd de variables y los vamos metiendo en el template
y al finalizar lo imprimimos en pantalla  
es lo mismo que hicimos en documentfragment pero desde HTML*/