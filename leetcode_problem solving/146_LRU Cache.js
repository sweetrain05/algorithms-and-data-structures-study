class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        } else {
            const temp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, temp);
            return this.cache.get(key);
        }
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
