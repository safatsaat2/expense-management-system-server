import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import Spinner from '../Components/Spinner';
// import { apiRequest } from '../utils/apiHelpers';

const Register = () => { 
const navigate = useNavigate()
const [loading, setLoading] = useState(false)

// Form Submit
    const submitHandlers = async (values) =>{
        try {
          setLoading(true)
          // const {data} = await apiRequest.post('/users/register', values) 
          // console.log("Register data", data);
          await axios.post('http://localhost:8080/api/v1/users/register', values)
          message.success('Registration successful')
          setLoading(false)
          navigate('/login')
        } catch (error) {
          setLoading(true)
          message.error("Invalid user or password")
          setLoading(false)
        }
    }


  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandlers}>
            <h1>Register Form</h1>
            <Form.Item label="Name:" name='name'>
                <Input/>
            </Form.Item>
            <Form.Item label="Email:" name='email'>
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password:" name='password'>
                <Input type='password'/>
            </Form.Item>
            <div className="d-flex justify-content-between g-2 ">
                <Link to='/login' className='text-primary-emphasis p-2'>Already Register? Click here to Log in</Link>
                <button className='btn btn-primary'>Register</button>
            </div>
        </Form>
      </div>
    </>
  );
};

export default Register;


