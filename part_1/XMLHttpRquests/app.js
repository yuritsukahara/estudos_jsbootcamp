// function reqListener () {
//     console.log(this.responseText);
//   };
  
//   var oReq = new XMLHttpRequest();
//   oReq.onload = reqListener;
//   oReq.open("get", "yourFile.txt", true);
//   oReq.send();

const firstRequest = new XMLHttpRequest();

firstRequest.addEventListener('load', function(){
    console.log('IT WORKED!');
    const data = JSON.parse(this.responseText);
    for(let planet of data.results){
        console.log(planet.name);
    }
});
firstRequest.addEventListener('error', () => {
   console.log('IT DID NOT WORK!');
});
firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.send();
console.log('Request sent!');
