function pcStore(input){
    let processor = Number(input[0]) * 1.57;
    let videoCard = Number(input[1]) * 1.57;
    let ram = Number(input[2]) * 1.57;
    let ramCount = Number(input[3]);
    let offer = Number(input[4]);

    processor = processor - (processor * offer);
    videoCard = videoCard - (videoCard * offer);

    let sum = processor + videoCard + ram * ramCount;

   

    console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}

pcStore(["500",
"200",
"80",
"2",
"0.05"])
