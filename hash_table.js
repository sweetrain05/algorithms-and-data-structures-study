class Hash_table {
    // set the size of the hash table
    constructor(size) {
        this.keyMap = new Array(size);
    }

    // get a unique hash index for the key inserted (= hash function)
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // insert a new data with new key and value
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    // retrieve value that correspond to the key
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            let result;
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    result = this.keyMap[index][i][1];
                }
            }
            return result;
        }
        return undefined;
    }

    // get all the keys in an array
    keys() {
        let arrOfKeys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    arrOfKeys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return arrOfKeys;
    }

    // get all the values in an array
    values() {
        let arrOfValues = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!arrOfValues.includes(this.keyMap[i][j][1])) {
                        arrOfValues.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return arrOfValues;
    }
}

let table = new Hash_table(4);
table.set("hello", "world");
table.set("hi", "bye");
table.set("zelda", "love");
table.set("danbi", "choi");
table.set("inyoung", "choi");
table.set("haha", "choi");
table.keys();
table.values();
