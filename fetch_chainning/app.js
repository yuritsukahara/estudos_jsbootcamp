const checkStatusAndParse = (response) => {
    if(!response.ok){
        throw new Error(`Status code Error: ${response.status}`);
    }
    return response.json();
};

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...')
    data.results.forEach(planet => {
        console.log(planet.name);
    });
    return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
}

fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch(error => {
    console.log('Algo deu errado com Fetch!');
    console.log(error);
});