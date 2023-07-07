import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import Spinner from '../Components/Spinner';

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


// Form Submit
    const submitHandlers = async(values) =>{
      try {
        setLoading(true)
       const {data} = await axios.post('/users/login', values)
        message.success('You are logged in successfully')
        localStorage.setItem('user', JSON.stringify({...data,password:''}))
        setLoading(false)
        navigate('/')
      } catch (error) {
        setLoading(true)
        message.error("Something went wrong.")
        setLoading(false)
      }
    }

  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout="vertical" onFinish={submitHandlers}>
          <h1>Login Form</h1>
          <Form.Item label="Email:" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password:" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between g-2 ">
            <Link to="/register" className="text-primary-emphasis p-2">
              New here? Click here to Register
            </Link>
            <button className="btn btn-primary">Log in</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
