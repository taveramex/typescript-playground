interface Person {
    name: string;
    lastName: string;
    age: number;
    isDeveloper: boolean;
    address: Address;
}
interface Address {
    street: string;
    number: number;
}

const person:Person = {
    name: 'Armando',
    lastName: "Tamales",
    age: 41,
    isDeveloper: true,
    address: {
        street: 'Calle falsa',
        number: 123,
    }
};

/*
// si se hace esto el objeto se copia por referencia asi que spooderman y person son el mismo objeto
//const spooderman = person;
// si queremos hacer una copia real del objeto usamos el spread operator
//const spooderman = {...person};
// pero si queremos clonar a profundidad (deep clone) necesitamos otra tecnica
const spooderman = structuredClone(person);
spooderman.name = 'Peter';
spooderman.lastName = "Parker";
spooderman.isDeveloper = false;
spooderman.age = 18;

//ahora si podemos modificar los objetos de spoodermnan sin afectar a person
spooderman.address.street = 'Calle falsa';
*/



console.log(person);