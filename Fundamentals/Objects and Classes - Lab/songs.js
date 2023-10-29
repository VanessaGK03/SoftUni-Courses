function songs(arr){    
    
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numSongs = arr.shift();
    let endType = arr.pop();

    for(let songInfo of arr){
        let [typeList, name, time] = songInfo.split('_');
        let song = new Song(typeList, name, time);

        if(endType != 'all'){
            if(song.typeList == endType){
                console.log(song.name);
            }
        }else{
            console.log(song.name)
        }
    }

}

songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])