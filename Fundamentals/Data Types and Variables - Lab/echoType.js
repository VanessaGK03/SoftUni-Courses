function echoType(something){
    let type = typeof(something);

    if(type === "string" || type === "number"){
        console.log(type);
        console.log(something);
    }else{
        console.log('object');
        console.log("Parameter is not suitable for printing");
    }


}

echoType(null);