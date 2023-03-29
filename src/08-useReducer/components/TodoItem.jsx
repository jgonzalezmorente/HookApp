
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className={ todo.done ? 'text-decoration-line-through': null }
                onClick={ () => onToggleTodo( todo.id ) }>{ todo.description }</span>
            <button className="btn btn-danger"
                    onClick={ () => onDeleteTodo( todo.id ) }>Borrar</button>
        </li>
    );
}
