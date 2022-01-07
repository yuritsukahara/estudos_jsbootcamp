const makeDogPromisse = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const rand = Math.random();
            if(rand < 0.5){
                resolve();
            } else{ 
                reject();
            }
        }, 5000);  
    }); 
};

makeDogPromisse().then(() => {
    console.log('You got a dog');
}).catch(() => {
    console.log('You did not get a dog');
});

