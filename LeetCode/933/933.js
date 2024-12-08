
class RecentCounter {
    constructor() {
        this.queue = [];
    }
    ping(t) {
        this.queue.push(t);
        return this.queue.filter(e => e >= t - 3000).length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
