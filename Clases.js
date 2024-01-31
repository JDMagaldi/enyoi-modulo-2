class Persona {
    constructor(nombre, apellido, edad, cedula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
    }
}

class Animal {
    constructor(nombre, genero, raza) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
    }
}

class Veterinaria {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

// Ejemplo de uso
const persona1 = new Persona('David', 'Magaldi', 27, '123456789');
const animal1 = new Animal('Jack', 'Macho', 'Labrador');
const veterinaria1 = new Veterinaria('Gresky Pet Care', 'Bogota D.C', '601 -1234567');

console.log(persona1);
console.log(animal1);
console.log(veterinaria1);
