import { useSelector ,useDispatch } from "react-redux";
import { updateTodo } from "../../store/todoSlice";

const List = () => {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  const dispatch = useDispatch();

  const handleUpdateTodo = (event) => {
    const { id } = event.target.dataset;
    dispatch(updateTodo(id));
  }

  const template = (todo) => {
    return (
      <li className="py-4" key={ todo.id }>
        <label className={ todo.status ? 'line-through' : ''}>
          <input type="checkbox" className="mr-2" onChange={ handleUpdateTodo } data-id={ todo.id } checked={ todo.status }/>
          { todo.name }
        </label>
      </li>
    )
  }

  return ( <ul> { todoList.map((todo) => template(todo)) } </ul> )
}

export default List;