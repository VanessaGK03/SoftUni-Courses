function solve(){
let baseObj = {
    num : 123,
    str: 'something',
    f: function(){
        console.log('base');
    }
};

let obj = Object.create(baseObj);
console.log(obj);
}

solve();