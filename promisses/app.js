const willGetYouDog = new Promise((resolve, reject) =>{
    const rand = Math.random();
    if(rand < 0.5){
        resolve();
    } else{ 
        reject();
    }
})

willGetYouDog.then(() => {
    console.log('You got a dog');
});
willGetYouDog.catch(() => {
    console.log('You did not get a dog');
});