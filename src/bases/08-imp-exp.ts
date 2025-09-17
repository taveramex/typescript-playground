import  { heroes, Hero, Owner } from "../data/heroes.data";


export const getHeroById = (id:number):Hero|undefined =>{
    const hero = heroes.find((hero)=>{
        if(hero.id===id){
            return hero;
        }
    })
    return hero;
}

export const getHerosByOwner = (owner:Owner):Hero[] =>{
    const heroeFilterbyOwner:Hero[] = heroes.filter((hero)=>hero.owner===owner); 
    return heroeFilterbyOwner;
}