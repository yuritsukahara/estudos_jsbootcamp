// async transformam funções. Elas que retornam promise
// await espera uma promessa ser cumprida
// só pode ser usado dentro de funções async

// async  function getPlanets(){
//   const res = await axios.get('https://swapi.dev/api/planets/');
//   console.log(res.data);
// }

// catching errors
// getPlanets().catch(err => console.log(err));

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

getPlanets();

// requests podem ser em paralelo ou em sequencia

async function get3PokemonSequential(){
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

// pararellel requests
async function get3PokemonParallel(){
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();