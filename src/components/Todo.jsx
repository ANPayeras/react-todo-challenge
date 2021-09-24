import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTodos, removeTodos, updateTodos } from '../redux/actions'
import { Button, Card, CardActions, CardContent, Input, Typography } from '@mui/material'
import '../Styles/todo.css'

function Todo({ completed, id, title }) {
    const dispatch = useDispatch()
    const [update, setUpdate] = useState(false)
    const [input, setInput] = useState({
        id: id,
        title: title,
        description: 'Lorem ipsum dolor sit amet.',
        completed: completed
    })
    const updateTodo = () => {
        setUpdate(true)
    }
    const updateTodo2 = () => {
        setUpdate(false)
        dispatch(updateTodos(input))
    }
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Card className='todo'>
            <CardContent className='todoBody' onChange={handleChange} >
                <Typography className='completed' color={!completed ? 'red' : 'green'} gutterBottom>
                    <p>{!completed ? 'Not Completed' : 'Completed'}</p>
                </Typography>
                <p className='title'>Title</p>
                {
                    update ? <Input className='inputs' placeholder='Title' name='title' defaultValue={input.title} /> :
                        <Typography sx={{ fontSize: 18 }} variant="h5" >
                            <p className='title2'>{input.title}</p>
                        </Typography>
                }
                <Typography className='description' variant="body2">
                    <p className='descriptionTitle'>Description</p>
                    {
                        update ? <Input className='inputs' placeholder='Description' name='description' defaultValue={input.description} /> :
                            <p className='descriptionTitle1'>{input.description}</p>
                    }
                </Typography>
            </CardContent>
            <CardActions className='todoBtns'>
                {
                    update ?
                        <Button color='inherit' size="small" onClick={updateTodo2}>Update Todo</Button>
                        :
                        <>
                            <Button color='inherit' size="small" onClick={() => dispatch(completeTodos(id))} >Complete</Button>
                            <Button color='inherit' size="small" onClick={() => dispatch(removeTodos(id))}>Delete</Button>
                            <Button color='inherit' size="small" onClick={updateTodo}>Update</Button>
                        </>
                }
            </CardActions>
        </Card >
    )
}

export default Todo
