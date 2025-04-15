<h2>  Design Circular Queue</h2><hr><div><p>Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".</p>

<p>One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.</p>

<p>Implement the <code>MyCircularQueue</code> class:</p>

<ul>
	<li><code>MyCircularQueue(k)</code> Initializes the object with the size of the queue to be <code>k</code>.</li>
	<li><code>int Front()</code> Gets the front item from the queue. If the queue is empty, return <code>-1</code>.</li>
	<li><code>int Rear()</code> Gets the last item from the queue. If the queue is empty, return <code>-1</code>.</li>
	<li><code>boolean enQueue(int value)</code> Inserts an element into the circular queue. Return <code>true</code> if the operation is successful.</li>
	<li><code>boolean deQueue()</code> Deletes an element from the circular queue. Return <code>true</code> if the operation is successful.</li>
	<li><code>boolean isEmpty()</code> Checks whether the circular queue is empty or not.</li>
	<li><code>boolean isFull()</code> Checks whether the circular queue is full or not.</li>
</ul>

<p>You must solve the problem without using the built-in queue data structure in your programming language.&nbsp;</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input</strong>
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
<strong>Output</strong>
[null, true, true, true, false, 3, true, true, true, 4]

<strong>Explanation</strong>
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= 1000</code></li>
	<li><code>0 &lt;= value &lt;= 1000</code></li>
	<li>At most <code>3000</code> calls will be made to&nbsp;<code>enQueue</code>, <code>deQueue</code>,&nbsp;<code>Front</code>,&nbsp;<code>Rear</code>,&nbsp;<code>isEmpty</code>, and&nbsp;<code>isFull</code>.</li>
</ul>
</div>


# Understanding Circular Queues

## Why use a Circular Queue?

A circular queue is a linear data structure that follows the FIFO (First In First Out) principle with the last position connected back to the first position to form a circle. Unlike a regular queue, a circular queue can reuse the empty spaces created by dequeued elements, making it more memory-efficient.

## Key Implementation Details

### Special `-1` Indicators for Empty Queues

When implementing a circular queue, we initialize both `head` and `tail` pointers to `-1`:

```typescript
constructor(k: number) {
    this.data = new Array(k);
    this.head = -1; // Start with -1 to indicate empty queue
    this.tail = -1; // Start with -1 to indicate empty queue
    this.size = 0;
    this.capacity = k;
}
```

**Why use `-1` instead of `0`?**

1. **Empty Queue Indication**: When `head = -1` and `tail = -1`, it clearly signals that the queue contains no elements.

2. **Distinguishing Empty from Non-Empty**: Using `0` would make it difficult to distinguish between an empty queue and a queue with one element at position 0.

3. **Invalid Index Marker**: Since valid array indices are non-negative integers, `-1` serves as a perfect special marker that can't be confused with a valid position.

### The Circular Magic: Modulo Operation

The key to making a queue "circular" is the modulo operation, which allows us to wrap around to the beginning of the array when we reach the end:

```typescript
// When adding a new element
this.tail = (this.tail + 1) % this.capacity;

// When removing an element
this.head = (this.head + 1) % this.capacity;
```

#### Example with a Capacity of 5

Consider a circular queue with capacity 5:

Array indices: `[0] [1] [2] [3] [4]`

As we add elements:
1. Start with `tail = -1`
2. Add first element: `tail = ((-1) + 1) % 5 = 0`
3. Add second element: `tail = (0 + 1) % 5 = 1`
4. Add third element: `tail = (1 + 1) % 5 = 2`
5. Add fourth element: `tail = (2 + 1) % 5 = 3`
6. Add fifth element: `tail = (3 + 1) % 5 = 4`

The critical moment comes when we try to add the sixth element:
7. `tail = (4 + 1) % 5 = 0`

The modulo operator (`%`) returns the remainder after division, causing our tail pointer to wrap around to the beginning of the array. This creates the circular behavior, allowing us to reuse spaces at the beginning of the array that were freed by dequeue operations.

## Visual Example: Queue with Capacity 1000

Let's walk through an example with a circular queue that has a maximum capacity of 1000.

### Initial State (Empty Queue)

```
head = -1
tail = -1
size = 0
capacity = 1000
data = [empty array with 1000 slots]
```

### After Adding 1

```
head = 0 (points to the first element)
tail = 0 (also points to the first element since there's only one)
size = 1
data[0] = 1
```

### After Adding 7

```
head = 0 (still points to the first element)
tail = 1 (moves to the second position)
size = 2
data[0] = 1, data[1] = 7
```

### After Adding 5, 6, and 4

```
head = 0
tail = 4
size = 5
data[0] = 1, data[1] = 7, data[2] = 5, data[3] = 6, data[4] = 4
```

At this point:
- `head` points to index 0, containing the value 1 (front of queue)
- `tail` points to index 4, containing the value 4 (rear of queue)

### After Removing Two Elements (deQueue twice)

```
head = 2 (moved forward twice)
tail = 4 (unchanged)
size = 3
data = [1, 7, 5, 6, 4] (1 and 7 are logically removed)
```

The queue now contains only [5, 6, 4].

### After Adding 9, 8, and 3

```
head = 2
tail = 7
size = 6
data[2] = 5, data[3] = 6, data[4] = 4, data[5] = 9, data[6] = 8, data[7] = 3
```

The queue now contains [5, 6, 4, 9, 8, 3].

### Wrapping Around the Array

If we reach the end of the array (index 999) and need to add another element:

```
tail = (999 + 1) % 1000 = 0
```

This wraps the tail back to index 0, creating the circular behavior and allowing us to reuse space at the beginning of the array.

## Benefits Over Traditional Queues

This approach is significantly more efficient than a traditional array-based queue, where removing elements from the front would require shifting all remaining elements to avoid wasting space.

## Complete Implementation

See the full implementation in the source code for details on all operations (enQueue, deQueue, Front, Rear, isEmpty, isFull).
