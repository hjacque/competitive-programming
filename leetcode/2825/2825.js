class MaxHeap {
    q = [];
    length = 0;

    insert(val){
        this.q[this.length] = val;
        this.length++;
        this.heapifyUp(this.length - 1);
    }

    peek(){
        if (this.length === 1) {
            this.length--;
            return this.q.shift();
        }

        const max = this.q[0];
        this.q[0] = this.q.pop();
        this.length--;
        this.heapifyDown(0);
        return max;
    }

    heapifyUp(id){
        const parentId = this.getParentId(id);
        const parentVal = this.q[parentId];
        const val = this.q[id];

        if (val > parentVal) {
            this.q[id] = parentVal;
            this.q[parentId] = val;
            this.heapifyUp(parentId);
        }
    }

    heapifyDown(id){
        const leftChildId = this.getLeftChildId(id);
        const leftChildVal = this.q[leftChildId];
        const rightChildId = this.getRightChildId(id);
        const rightChildVal = this.q[rightChildId];
        const val = this.q[id];

        if (val < leftChildVal && (leftChildVal >= rightChildVal || rightChildVal === undefined)) {
            this.q[id] = leftChildVal;
            this.q[leftChildId] = val;
            this.heapifyDown(leftChildId);
        } else if (val < rightChildVal && rightChildVal > leftChildVal) {
            this.q[id] = rightChildVal;
            this.q[rightChildId] = val;
            this.heapifyDown(rightChildId);
        }
    }

    getParentId(id){
        return Math.floor((id - 1) / 2);
    }

    getLeftChildId(id){
        return id * 2 + 1;
    }

    getRightChildId(id){
        return id * 2 + 2;
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new MaxHeap();
  for (const num of nums) {
    heap.insert(num);
  }
  for (let i = 1; i < k; i++) {
    heap.peek();
  }
  return heap.peek();
};
