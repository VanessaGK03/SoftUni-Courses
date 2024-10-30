function townsToJSON(arr) {
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        let [_, Town, Latitude, Longitude] = arr[i].split('|').map(item => item.trim());
        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude).toFixed(2);
        let town = { Town, Latitude: Number(Latitude), Longitude: Number(Longitude) };
        res.push(town);
    }
    console.log(JSON.stringify(res));
}


townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);