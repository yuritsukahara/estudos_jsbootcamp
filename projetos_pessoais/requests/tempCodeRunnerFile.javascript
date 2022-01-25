const axios = require("axios");

const getData = async () =>{
    try{
        const resp = await axios.get("https://projects.rarity.tools/static/staticdata/cryptopunks.json");
        return resp.data;
    } catch (err) {
        console.log(err);
    }
};


getData().then((data) => {
    for(item in data.basePropDefs){   
        if(data.basePropDefs['pvs']){
            console.log('y')
        }
    }
});