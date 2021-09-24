import { Button, Input } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../redux/actions'
import Filters from './Filters'
import '../Styles/addTodo.css'

function AddTodo({ todos, setTodosFilter }) {
    const dispatch = useDispatch()
    const [err, setErr] = useState(false)
    const [input, setInput] = useState({
        id: 0,
        title: '',
        description: '',
        completed: false,
        userId: 'me'
    })
    const { title, description } = input

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            id: todos.length + 1
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) {
            setErr(true)
            return
        }
        setInput({
            ...input,
            title: '',
            description: ''
        })
        setErr(false)
        dispatch(addtodo(input))
    }
    return (
        <div className='containerAdd'>
            <form className='formAdd' onChange={handleChange} onSubmit={handleSubmit} >
                <Input error={err && !title ? true : false} className='inputsForm' placeholder='Title' name='title' value={title} />
                <Input error={err && !description ? true : false} className='inputsForm' placeholder='Description' name='description' value={description} />
                <Button className='btnForm' type='submit' color='success' size="medium" >Create</Button>
            </form>
            <Filters todos={todos} setTodosFilter={setTodosFilter} />
        </div>
    )
}

export default AddTodo
