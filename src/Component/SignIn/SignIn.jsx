import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignInAsync } from '../../Services/Action/AuthAction';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { IsLogin } = useSelector(state => state.Authreducer);

    const [InputField, setInputFied] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;

        setInputFied({ ...InputField, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(SignInAsync(InputField))
    }



    

    // useEffect(() => {
    //     if(IsLogin){
    //         navigate('/');
    //     }
    // }, []);

    if (IsLogin) {
        navigate('/');
    }
    else {
        return (
            <Container>
                {/* {
                    alert()
                } */}
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={InputField.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={InputField.password} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <p>
                        Already have Account ?
                        <NavLink className="ms-2" to='/signup'>SignUp</NavLink>

                    </p>
                </Form>
            </Container>
        )
    }

}

export default SignIn;