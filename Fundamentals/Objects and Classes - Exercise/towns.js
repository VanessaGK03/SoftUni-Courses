function towns(arr){
    for(let townInfo of arr){
        let [townName, latitude, longitude] = townInfo.split(' | ');
    
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let town = {
            town : townName,
            latitude : latitude,
            longitude : longitude,
        }

        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);