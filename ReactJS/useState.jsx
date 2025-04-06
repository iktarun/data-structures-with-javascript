const usePolyfilledState = (initialValue) => {
    // Handle lazy initialization if initialValue is a function
    let value = typeof initialValue === 'function' ? initialValue() : initialValue;
  
    const setValue = (newValue) => {
      value = typeof newValue === 'function' ? newValue(value) : newValue;
      console.log('Updated Value:', value); // Mimics state update (but lacks re-render)
    };
  
    return [value, setValue];
  };
  
  // Example usage:
  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
      initialTodos.push({
        id: i,
        text: 'Item ' + (i + 1),
      });
    }
    return initialTodos;
  }
  
  function TodoApp() {
    const [todos, setTodos] = usePolyfilledState(createInitialTodos); // Lazy init handled
  
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.slice(0, 5).map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <button onClick={() => setTodos((prevTodos) => [...prevTodos, { id: todos.length, text: `Item ${todos.length + 1}` }])}>
          Add Todo
        </button>
      </div>
    );
  }
  