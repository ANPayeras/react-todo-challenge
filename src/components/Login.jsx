import { Button, TextField } from '@mui/material'
import React from 'react'
import '../Styles/login.css'

function Login() {

    const login = (e) => {
        e.preventDefault()
        window.location.href = ('./todoList')
    }

    return (
        <div className='loginContainer'>
            <form className='form' onSubmit={login} autoComplete='off'>
                <TextField label="Name" name='name' defaultValue='Angel' />
                <TextField label="Email" name='email' defaultValue='todos@gmail.com' />
                <Button type='submit' variant='outlined' color='primary'  >
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
