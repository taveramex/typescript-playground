
const myPromise:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(false){
            resolve('Promise resolved');
        } else {            
            reject('Promise rejected'); 
        }
        
    }, 2000);
});

let isError:boolean = true;

myPromise.then((message)=>{
    console.info(message);
    isError = false;
}).catch((msj)=>{
    isError = true;
    console.error('Promise Error Message: '+msj);
}).finally(()=>{
    

});