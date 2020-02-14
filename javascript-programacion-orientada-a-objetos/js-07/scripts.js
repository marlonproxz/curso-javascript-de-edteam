/*
ABSTRACCIÓN: es poder entender del mundo real y llevarlo a codigo
    ejm: si quieres crear un usuario tu tienes que entender que es un usuario
    para ti, generalmente para todos un usuario tiene (nombre, correo, contraseña)
    pero dependiendo tu caso puede que tu usuario necesites 
    (guardar la fecha de nacimiento, tu cedula o documento de identidad, tu pasaporte o
    puede que en otros casos necesites saber el lugar de nacimiento, etc)
    la abstraccion va depender de los requerimientos de tu proyecto.

OBJETOS: son esa abstraccion que llevamos a codigo de tal manera de que estos tengan
        atributos y metodos, nosotros vmaos a crear instancias la mayor cantidad de instancias
        posibles de tal manera de que esa abstraccion de que hemos hecho en la planificacion se
        vuelva real.

ATRIBUTOS: son las cualidades y el listado de cosas que tu objeto tiene (nombre, apellido, correo, etc)

MÉTODOS: las capacidades que van a tener tus objetos, que pueden hacer tus objetos
        (pueden que ya tengan nombre pero no decir su nombre) entonces con un metodo
        tu le das a un objeto la capacidad de que te diga su nombre

FUNCION CONSTRUCTORA: un molde por medio del cual nosotros podemos crear objetos mucho mas rapido
    sin necesidad de repetir codigo y tambien sin el miedo a que nos equivoquemos los nombres de los 
    atributos, en los nombres de los metodos que nos devuelven los metodos y demas.
    entonces es un molde que todos los objetos que salgan de esa funcion sean iguales, obviamente
    con diferente informacion.

CLASES: van hacer esos moldes que hemos aprendidos en funcion constructura pero clases son el
        concepto ya ejecutando POO,  las clases van a tener 3 cosas: los metodos constructor
        lo que hace es settear atributos y los metodos como tal

METODO CONSTRUCTOR: es muy similar a la funcion constructora pero este se ejecuta dentro de una clase,
        este metodo recibe los parametros necesarios para generar y crear un objeto con dichos atributos

Getters & Setters: Nos van a permitir poder acceder a la informacion a los atributos que tiene un objeto
        y tambien nos va permitir cambiar los valores de un objeto
        
HERENCIA: es la capacidad que tienen las clases de poder extenderse, asi como un padre
        permite extenderse, un hijo extiende dichos atributos que su padre permite esa extension
        el hijo gracias a la herencia se va convertir como una clases superior que esta siendo definida
        cuando declaremos del metodo constructor de una clase que extiende de otra tambien necesitamos
        crear un objeto de dicha clase con el metodo Super()

SUPER(): va recibir los parametros que requiere la clase a la cual estamos extendiendo
*/