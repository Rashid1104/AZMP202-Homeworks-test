let todos = [];
let filter = 'all';

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (!task) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a task!',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33',
      });
      return;
    }
  
    const timestamp = new Date();
    const formattedTimestamp = timestamp.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  
    todos.push({
      id: Date.now(),
      text: task,
      completed: false,
      timestamp: formattedTimestamp,
    });
  
    input.value = '';
    renderTodos();
  
    Swal.fire({
      title: 'Success!',
      text: 'Todo created successfully!',
      icon: 'success',
    });
  }
  

function deleteTodo(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
  
        Swal.fire({
          title: 'Deleted!',
          text: 'Your task has been deleted.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  }
  
  function editTodo(id) {
    Swal.fire({
      title: 'Edit your task',
      input: 'text',
      inputLabel: 'Your task:',
      inputValue: todos.find(todo => todo.id === id).text,
      showCancelButton: true,
      confirmButtonText: 'Save',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      inputValidator: value => {
        if (!value.trim()) {
          return 'Task cannot be empty!';
        }
      },
    }).then(result => {
      if (result.isConfirmed) {
        const newText = result.value.trim();
        todos = todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo));
        renderTodos();
  
        Swal.fire({
          title: 'Updated!',
          text: 'Your task has been updated.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  }
  

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function filterTodos(criteria) {
  filter = criteria;
  renderTodos();
}

function clearAllTodos() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete all your todos permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear all!',
      cancelButtonText: 'No, cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then(result => {
      if (result.isConfirmed) {
        todos = [];
        renderTodos();
  
        Swal.fire({
          title: 'Cleared!',
          text: 'All todos have been deleted.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  }  

  function renderTodos() {
    const list = document.getElementById('todo-list');
    const count = document.getElementById('todo-count');
  
    const filteredTodos = todos.filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'pending') return !todo.completed;
      return true;
    });
  
    list.innerHTML = filteredTodos
      .map(
        todo => `
          <div class="todo-item">
            <div>
              <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleTodo(${todo.id})">
              <span class="${todo.completed ? 'completed' : ''}">
                ${todo.text} (${todo.timestamp})
              </span>
            </div>
            <div class="todo-buttons">
              <button class="edit-btn" onclick="editTodo(${todo.id})">
                <i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i>
              </button>
              <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
              </button>
            </div>
          </div>
        `
      )
      .join('');
  
    const pendingCount = todos.filter(todo => !todo.completed).length;
    count.innerHTML = `<span style="color: red;">${pendingCount}</span>`;
  }
  

