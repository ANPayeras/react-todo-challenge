import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../redux/actions'
import Todo from './Todo'
import AddTodo from './AddTodo'
import '../Styles/todoList.css'

function TodoList() {
    const { todos } = useSelector(state => state)
    const [todosFilter, setTodosFilter] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return (
        <div className='container'>
            <div className='controlContainer'>
                <AddTodo todos={todos} setTodosFilter={setTodosFilter} />
            </div>
            <div className='todoListContainer'>
                {
                    todosFilter && todosFilter.slice(0, 15).map(e => (
                        <Todo key={e.id}
                            completed={e.completed}
                            id={e.id}
                            title={e.title}
                        />
                    ))

                }
                {
                    todos && !todosFilter && todos.slice(0, 15).map(e => (
                        <Todo key={e.id}
                            completed={e.completed}
                            id={e.id}
                            title={e.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList
