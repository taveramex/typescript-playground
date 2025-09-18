import type { GyphyRandomCat } from "../data/GyphyRandomCat";

const MY_API_KEY = 'BTgQCWdQ2nDSHRzjcywnSTh4vwfdiUV7';

const myCats = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}&tag=cat`);

myCats.then((response) => response.json()).then((jsonData:GyphyRandomCat)=>{
    const imgUrl =  jsonData.data.images.original.url;

    const imgElement = document.createElement('img');
    imgElement.src= imgUrl;
    document.getElementById('app')?.appendChild(imgElement);
}).catch((err)=>{
    console.error("error: "+err);
});