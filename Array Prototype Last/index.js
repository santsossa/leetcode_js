const arr = [1, 2, 3];
// 3
Array.prototype.last = function() {
    if (this.length===0) return -1
    let arr= []
    for(i=0; i<this.length;i++){
        if (typeof this[i]==="number") 
        arr.push(this[i])

    }
    return arr[arr.length -1]
};


arr.last(); 