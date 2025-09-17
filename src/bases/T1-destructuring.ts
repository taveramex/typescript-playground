
let stateVar:string;
const consoleStr = (variable:string) =>{
    console.log(variable);
    stateVar = variable;
}

export const useState = (state:string)=>{
    consoleStr(state);
    return [stateVar, consoleStr ] as const;
}