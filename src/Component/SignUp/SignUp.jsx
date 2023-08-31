import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function SignUp() {

    const [InputField, setInputFied] = useState({
        fname : '',
        email : '',
        password : '',
        con_password : ''
    })

    handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setInputFied({...InputField, [name] : value})
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="fname" value={InputField.fname} onChange={() => handleChange()}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={InputField.fname} onChange={() => handleChange()}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={InputField.fname} onChange={() => handleChange()}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="con_password" value={InputField.fname} onChange={() => handleChange()}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignUp