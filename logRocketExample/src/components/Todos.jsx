import fetchData from "../api/fetchData";

const resource = fetchData("https://jsonplaceholder.typicode.com/posts");

function Todos() {
  const todos = resource.read();
  console.log(todos);

  const renderTodos = todos.map((todo) => {
    const className =
      todo.completed === "Completed" ? "todo-completed" : "todo";

    return (
      <li className={`todo ${className}`} key={todo.id}>
        {todo.title}
      </li>
    );
  });

  return (
    <div>
      <h3>Todos</h3>
      <ol className="todos">{renderTodos}</ol>
    </div>
  );
}

export default Todos;
