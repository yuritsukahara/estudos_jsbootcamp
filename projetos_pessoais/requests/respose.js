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
        console.log(data.basePropDefs[item]);
        let {name, type, pvs} = data.basePropDefs[item];
        const array = []
        for(atb in pvs){
            let a_name = pvs[atb][0];
            let count = pvs[atb][1];
            // TODO: calcular raridade
            console.log(a_name, count)
        }
    }
});