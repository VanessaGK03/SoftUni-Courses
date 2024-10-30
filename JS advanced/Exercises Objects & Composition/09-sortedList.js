function createSortedList(){
    return {
        list : [],
        add: function(num){
            this.list.push(num);
            this.size = this.list.length;
            this.list.sort(this._sortArr);
        },
        remove: function(index){
            if(index < 0 || index >= this.size){
                return;
            }
            this.list.splice(index, 1);
            this.list.sort(this._sortArr);
            this.size = this.list.length;
        },
        get: function(index){
            if(index < 0 || index >= this.size){
                return;
            } 
            return this.list[index];
        },
        size: 0,
        _sortArr : (a, b) => a - b,
    }
}



let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));