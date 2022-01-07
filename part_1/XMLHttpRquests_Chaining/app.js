// function reqListener () {
//     console.log(this.responseText);
//   };
  
//   var oReq = new XMLHttpRequest();
//   oReq.onload = reqListener;
//   oReq.open("get", "yourFile.txt", true);
//   oReq.send();

const firstRequest = new XMLHttpRequest();

firstRequest.addEventListener('load', function(){
    console.log('FIRST REQUEST WORKED!');
    const data = JSON.parse(this.responseText);
    const filmUrl = data.results[0].films[0];
    const filmRequest = new XMLHttpRequest();
    filmRequest.addEventListener('load', function(){
        const filmeData = JSON.parse(this.responseText);
        console.log(filmeData);
    });
    filmRequest.addEventListener('error', function(e){
        console.log('ERROR!', e );
    });
    filmRequest.open('GET', filmUrl);
    filmRequest.send();
    // for(let planet of data.results){
    //     console.log(planet.name);
    // }
});
firstRequest.addEventListener('error', () => {
   console.log('IT DID NOT WORK!');
});
firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.send();
console.log('Request sent!');
