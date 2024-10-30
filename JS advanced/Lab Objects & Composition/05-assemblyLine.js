function createAssemblyLine(){
    return obj = {
        hasClima : function(obj2){
            obj2.temp = 21;
            obj2.tempSettings = 21;
            obj2.adjustTemp = function(){
                if(this.temp < this.tempSettings){
                    this.temp++;
                }else if(this.temp > this.tempSettings){
                    this.temp--;
                }
            }
        },

        hasAudio : function(obj2){
            obj2.currentTrack = {
                name : null,
                artist : null,
            }

            obj2.nowPlaying = function() {
                if (obj2.currentTrack.name !== null && obj2.currentTrack.artist !== null) {
                    console.log(`Now playing '${obj2.currentTrack.name}' by ${obj2.currentTrack.artist}`);
                }
            };
        },

        hasParktronic : function(obj2){
            obj2.checkDistance = function(distance){
                if(distance < 0.1){
                    console.log("Beep! Beep! Beep!");
                }else if(0.1 <= distance && distance < 0.25 ){
                    console.log("Beep! Beep!");
                    
                }else if(0.25 <= distance && distance < 0.5){
                    console.log("Beep!"); 
                }else{
                    console.log('');
                }
            }
        }
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();



assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);