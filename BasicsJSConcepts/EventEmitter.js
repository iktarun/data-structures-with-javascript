class EventEmitter {
    constructor() {
      this.events = {}; // Store event listeners
    }
  
    // Register an event listener
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Remove a specific listener
    off(event, listener) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  
    // Emit (trigger) an event
    emit(event, ...args) {
      if (!this.events[event]) return;
      this.events[event].forEach(listener => listener(...args));
    }
  
    // Register a one-time listener
    once(event, listener) {
      const onceWrapper = (...args) => {
        listener(...args);
        this.off(event, onceWrapper); // Remove after first execution
      };
      this.on(event, onceWrapper);
    }
  
    // Remove all listeners for an event
    removeAllListeners(event) {
      if (!this.events[event]) return;
      delete this.events[event];
    }
  }
  