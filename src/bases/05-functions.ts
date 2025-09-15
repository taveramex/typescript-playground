// function greet(name: string): string {
//     return (`Hello, ${name}`);
// }

const greet2 = (name: string): string => {
    return (`Hello, ${name}`);
}

const message = greet2('Armando');
console.log(message);

interface usuario {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;
}

const getUser = (id: number): usuario => {
    return {    
        id,
        nombre: 'Armando', apellido: 'Tamales', edad: 42, direccion: 'Calle 123'
    }
}

const localUser= getUser(42);
console.log(localUser);