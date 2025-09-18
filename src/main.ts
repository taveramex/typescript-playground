
import './style.css'
//import './bases/03-object-literal'
//import './bases/04-arrays'
//import './bases/05-functions'
//import './bases/06-obj-destructuring'
//import { printResponse } from './bases/07-array-destructuring'
//import { useState } from './bases/T1-destructuring'
import { getHerosByOwner } from './bases/08-imp-exp'
import { Owner } from './data/heroes.data'
// import './bases/10-fetch-api'
import './bases/11-async-await'
// const [name, setName] = useState("Goku");
// console.log("usando State:"+ name);
// setName("vegeta");


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Typescript Training</h1>
    <p>${JSON.stringify(getHerosByOwner(Owner.Marvel))}</p>
  </div>
`