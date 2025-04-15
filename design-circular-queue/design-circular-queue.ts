class MyCircularQueue {
    private data: number[];
    private head: number;
    private tail: number;
    private size: number;
    private capacity: number;

    constructor(k: number) {
        // Initialize an array of size k
        this.data = new Array(k);
        
        // We use -1 for head and tail to indicate an empty queue
        // Why -1 instead of 0?
        // 1. It clearly indicates there are no elements yet (empty queue state)
        // 2. When we insert the first element, we'll set both head and tail to 0
        // 3. Using 0 would make it difficult to distinguish between an empty queue
        //    and a queue with one element at position 0
        // 4. -1 can't be a valid array index, making it a perfect marker
        this.head = -1; 
        this.tail = -1; 
        
        this.size = 0;  // Current number of elements
        this.capacity = k; // Maximum capacity
    }

    // Insert an element into the queue. Return true if successful.
    enQueue(value: number): boolean {
        // Check if queue is full
        if (this.isFull()) {
            return false;
        }
        
        // If queue is empty, set head to 0
        if (this.isEmpty()) {
            this.head = 0;
        }
        
        // Calculate the new tail position using modulo to wrap around
        // This is what makes the queue "circular" - when we reach the end,
        // we wrap back to the beginning of the array
        this.tail = (this.tail + 1) % this.capacity;
        
        // Add the new element
        this.data[this.tail] = value;
        // Increase size
        this.size++;
        
        return true;
    }
    
    // Delete an element from the front and return true if operation is successful
    deQueue(): boolean {
        // Check if queue is empty
        if (this.isEmpty()) {
            return false;
        }
        
        // Decrease size
        this.size--;
        
        // If the queue becomes empty after this operation,
        // reset head and tail to -1 to indicate empty state
        if (this.size === 0) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        
        // Move head pointer forward (wrapping around if necessary)
        this.head = (this.head + 1) % this.capacity;
        
        return true;
    }

    // Get the front item
    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.head];
    }

    // Get the last item
    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.tail];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Check if the queue is full
    isFull(): boolean {
        return this.size === this.capacity;
    }
}