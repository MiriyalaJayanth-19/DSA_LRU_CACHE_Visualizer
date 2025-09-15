# LRU Cache Visualizer

A dynamic web application built with HTML, CSS, and JavaScript to visually demonstrate the working mechanism of a Least Recently Used (LRU) Cache. This tool allows users to interact with a simulated cache, observing cache hits, misses, evictions, and the internal state of the cache in real-time.
##Access the website
click here -->https://lru-cache-visualizer-five.vercel.app/
## Features

- **Interactive Operations:** Perform `GET` and `PUT` operations on the cache.
- **Visual Representation:** See the cache's contents as a doubly linked list, with the Most Recently Used (MRU) item at the beginning and the Least Recently Used (LRU) item at the end.
- **Dynamic Updates:** Watch items move to the MRU position on `GET` (cache hit) or `PUT` (update).
- **Eviction Visualization:** Clearly observe which item is evicted when the cache reaches its capacity and a new item is added.
- **Activity Log:** A detailed log of all cache operations, including hits, misses, additions, updates, and evictions.
- **Configurable Capacity:** Adjust the cache's maximum capacity.
- **Responsive Design:** Basic responsiveness to work on various screen sizes.

## How to Use

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/lru-cache-visualizer.git](https://github.com/your-username/lru-cache-visualizer.git)
    cd lru-cache-visualizer
    ```
2.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser. There's no server-side setup required.

## Project Structure
lru-cache-visualizer/
├── index.html        # Main HTML file for the web application
├── style.css         # CSS for styling the visualizer
├── script.js         # JavaScript for LRU cache logic and DOM manipulation
└── README.md         # This README file
## Implementation Details

The LRU Cache is implemented using a combination of two core data structures for optimal performance:

1.  **Hash Map (JavaScript Object):** `this.cache` stores `key -> Node` mappings. This allows for `O(1)` average time complexity for checking if a key exists and retrieving its associated node.
2.  **Doubly Linked List:** Manages the order of items based on their recency.
    -   The `head` of the list points to the Most Recently Used (MRU) item.
    -   The `tail` of the list points to the Least Recently Used (LRU) item.
    -   Dummy `head` and `tail` nodes are used to simplify edge cases (empty cache, single-item cache).

### Core Logic in `script.js`

-   **`Node` Class:** Represents an individual item in the cache, holding `key`, `value`, and `prev`/`next` pointers for the linked list.
-   **`LRUCache` Class:**
    -   `constructor(capacity)`: Initializes the cache with a given maximum size.
    -   `_removeNode(node)`: A helper method to remove a node from its current position in the doubly linked list in `O(1)` time.
    -   `_addToHead(node)`: A helper method to add a node right after the dummy `head`, making it the MRU item in `O(1)` time.
    -   `get(key)`: Retrieves an item. If found (cache hit), the item is moved to the head of the list. Returns `{ value, hit: true/false }`.
    -   `put(key, value)`: Adds or updates an item.
        -   If the key exists, its value is updated, and it's moved to the head.
        -   If the key is new and the cache is full, the LRU item (before the dummy `tail`) is evicted, and the new item is added to the head.
        -   Returns an object indicating if an item was evicted and its key.
    -   `getCurrentState()`: Returns an array representing the current ordered state of the cache for visualization.
    -   `reset()`: Clears the cache.

### Visualization & Animation

The JavaScript code directly manipulates the DOM to render the cache state.

-   **`updateVisualization()`:** This function is called after every cache operation. It clears the existing display and recreates the nodes based on the `LRUCache.getCurrentState()`.
-   **CSS Animations:** CSS classes like `.highlight-hit`, `.highlight-evicted`, and `.highlight-new` are dynamically added to nodes to provide visual feedback (e.g., flashing, fading).
-   **Node Positioning Animation:** A more advanced animation logic calculates the initial and final positions of nodes. It then applies a `transform` to move them to their *old* positions instantly, followed by a CSS `transition` to animate them back to their *new* positions, creating a smooth "movement" effect.

## Future Enhancements (Ideas for Improvement)

-   **More Robust Input Validation:** Add more comprehensive checks for key/value inputs.
-   **Animation Enhancements:**
    -   Arrow indicators to show `prev`/`next` pointers in the linked list.
    -   Smooth animation for node removal and insertion, especially when items shift positions.
    -   Visual representation of the hash map (e.g., a simple table).
-   **Performance Metrics:** Display hit rate, miss rate.
-   **Error Handling:** More user-friendly error messages.
-   **Step-by-Step Mode:** Allow users to step through operations one by one, pausing animations.
-   **Code Quality:** Add more JSDoc comments to JavaScript functions.
