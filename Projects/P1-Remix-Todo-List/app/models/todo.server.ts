let todos: string[] = [];

export async function getTodos() {
  return todos;
}

export async function createTodo(text: string) {
  todos.push(text);
}