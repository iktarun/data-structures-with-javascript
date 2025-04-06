class LRUCache{
    constructor(limit=10){
        this.cacheLimit = limit;
        this.cache = new Map();
    }

    get(key){
        if(!this.cache.has(key)){
            return null;
        }
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    set(key, value){
        console.log(this.cache.size,this.cacheLimit)
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size >= this.cacheLimit){
            let oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);

        }
        this.cache.set(key,value);

    }

}

let obj = new LRUCache(3);
obj.set("1", 1);
obj.set("2", 2);
obj.set("3", 3);

// console.log(obj.get("1"));
// console.log(obj)

obj.set("4", 4);
console.log(obj);
// console.log(obj.get("4"));
// console.log(obj);