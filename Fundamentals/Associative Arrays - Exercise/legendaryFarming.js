function legendaryFarming(str){
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    let junkMaterials = {};

    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};

    let materialsArr = str.split(' ');

    for(let i = 0; i < materialsArr.length; i+=2){
        let qty = Number(materialsArr[i]);
        let material = materialsArr[i + 1].toLowerCase();

        if(material in keyMaterials){
            keyMaterials[material] += qty;

            if(keyMaterials[material] >= 250){
                keyMaterials[material] -= 250;
                console.log(`${legendaries[material]} obtained!`);
                break;
            }
        }else{
            if(material in junkMaterials){
                junkMaterials[material] += qty;
            }else{
                junkMaterials[material] = qty;
            }
        }
    }

    let entriesKeyMaterials = Object.entries(keyMaterials);
    entriesKeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let entriesJunkMaterials =  Object.entries(junkMaterials);
    entriesJunkMaterials.sort((a, b) => a[0].localeCompare(b[0]));

    for(let [material, qty] of entriesKeyMaterials){
        console.log(`${material}: ${qty}`);
    }

   for(let [material, qty] of entriesJunkMaterials){
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
