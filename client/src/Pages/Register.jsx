import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
// import { apiRequest } from '../utils/apiHelpers';

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Form Submit
  const submitHandlers = async (values) => {
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
  // prevent for log in user

  useEffect(() => {
    if (localStorage.getItem(`user`)) {
      navigate('/');
    }
  }, [navigate])


  return (
    <>
      <div style={{ background: "rgb(0, 6, 27)" }}>
        <div style={{ height: "100vh", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
          <Link className="navbar-brand" to='/' >
            <p style={{ fontSize: "80px", width: "60%", marginLeft: "auto", marginRight: "auto" }}> Expense Management</p>
          </Link>
          <div className="register-page">
  {loading && <Spinner />}
  <div className="d-flex align-items-center justify-content-center">
    <h1 style={{ fontSize: "50px", width: "40%", marginRight: "24px" }}>
      Register to Our Smart Expense Management Platform!
    </h1>

    <Form layout='vertical' onFinish={submitHandlers}>
      <Form.Item label="Name:" name='name'>
        <Input />
      </Form.Item>
      <Form.Item label="Email:" name='email'>
        <Input type='email' />
      </Form.Item>
      <Form.Item label="Password:" name='password'>
        <Input type='password' />
      </Form.Item>
      <div className="d-flex justify-content-between g-2 ">
        <Link to='/login' className='p-2' style={{ color: "white", }}>Already Register? Click here to Log in</Link>
        <button className='btn btn-primary'>Register</button>
      </div>
    </Form>
  </div>
</div>
        </div>
      </div >
    </>
  );
};

export default Register;



