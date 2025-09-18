import type { GyphyRandomCat } from "../data/GyphyRandomCat";

const MY_API_KEY = 'BTgQCWdQ2nDSHRzjcywnSTh4vwfdiUV7';

const appendCatto = (url:string)=>{
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.getElementById('app')?.appendChild(imgElement);
};

const getCatImg = async () => {
    const response:Response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}&tag=cat`);

    // const { data } = (await response.json()) as GyphyRandomCat;
    const { data }:GyphyRandomCat = await response.json();
    return data.images.original.url;
};

getCatImg().then(appendCatto);

