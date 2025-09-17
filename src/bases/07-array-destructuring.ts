
const charNames = ['Goku', 'Vegeta', 'Gohan'];

const [,name] = charNames;





const returnArrayFn = ()=>{
    return ["abc", 123] as const;
}

const [lett,nums] = returnArrayFn();
let response:any = { lett , nums : nums+100}


export const printResponse = ()=>{
    console.log({status: "200", respuesta:response});
    response = (typeof response === 'object' && response !== null)? JSON.stringify(response): response;
    return `la Variable name es: ${response}` ;
}