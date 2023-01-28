import React from 'react'
import { useState } from 'react';
import { Icon, Label, Menu, Table, Button, Segment, Container, Form, TextArea, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    const userData = {
      "user": username,
      "password": password
    }

    axios.post('http://localhost:8082/api/user/login', userData)
      .then((getData) => {
        if (getData.data) {
          sessionStorage.setItem("username", userData.user);
          navigate('/cpanel');
        }
        else {
          alert('Invalid Username or Password!')
        }
      }
      )
  }

  return (
    <Container text>
      <br></br>
      <div className="p-3 mb-2 bg-secondary text-white"><b>cPanel Login</b></div>
      <Segment>
        <Form>
          <Form.Field>
            <label>User Name</label>
            <input name='username' placeholder='User Name' onChange={(e) => setUsername(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Field>

          <Button color='grey' type='submit' onClick={authenticate}>Log In</Button>
        </Form>
      </Segment>
    </Container>
  )
}

export default Login