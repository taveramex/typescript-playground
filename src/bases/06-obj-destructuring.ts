

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: number
}

const useContext = ({key, name, age, rank=1}:Hero)=> {

    return {
        keyName: key,
        user:{
            name,
            age
        },
        rank: rank
    }
}

const {rank, keyName, user:{name:alias}} = useContext(person);
console.log({rank, keyName, alias});

