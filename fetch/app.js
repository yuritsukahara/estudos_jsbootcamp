fetch('https://swapi.dev/api/planesdfts/')
.then(response => {
    if(!response.ok){
        throw new Error(`Status code Error: ${response.status}`);
    }
    response.json().then((data) => {
        data.results.forEach(planet => {
            console.log(planet.name);
        });
    });
})
.catch(error => {
    console.log('Algo deu errado com Fetch!');
    console.log(error);
});