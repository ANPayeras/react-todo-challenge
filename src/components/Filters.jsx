import { useState } from 'react'
import { Chip } from '@mui/material'
import '../Styles/addTodo.css'

function Filters({ todos, setTodosFilter }) {
    const [completedFil, setCompletedFil] = useState(false)
    const [noCompletedFil, setNoCompletedFil] = useState(false)
    const [meTodos, setMeTodos] = useState(false)
    const handleClickComplet = () => {
        const filter = todos.filter(e => e.completed === true)
        setCompletedFil(true)
        setNoCompletedFil(false)
        setMeTodos(false)
        setTodosFilter(filter)
    }
    const handleClickNoComplete = () => {
        const filter = todos.filter(e => e.completed === false)
        setNoCompletedFil(true)
        setCompletedFil(false)
        setMeTodos(false)
        setTodosFilter(filter)
    }
    const handleClickMe = () => {
        const filter = todos.filter(e => e.userId === 'me')
        setMeTodos(true)
        setCompletedFil(false)
        setNoCompletedFil(false)
        setTodosFilter(filter)
    }
    const handleDelete = () => {
        setCompletedFil(false)
        setNoCompletedFil(false)
        setMeTodos(false)
        setTodosFilter()
    }
    return (
        <div className='containerFilters'>
            <Chip name='a' label='Completed' variant={completedFil ? 'filled' : 'outlined'} color='success' onClick={handleClickComplet} onDelete={handleDelete} />
            <Chip label='Not Completed' variant={noCompletedFil ? 'filled' : 'outlined'} color='error' onClick={handleClickNoComplete} onDelete={handleDelete} />
            <Chip label='My Todos' variant={meTodos ? 'filled' : 'outlined'} color='info' onClick={handleClickMe} onDelete={handleDelete} />
        </div>
    )
}

export default Filters
