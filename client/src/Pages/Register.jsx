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
      <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,61,79,1) 100%)" }}>
        <div style={{ height: "100vh", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
          <Link className="navbar-brand" to='/' >
            <p data-aos="zoom-in" data-aos-duration="1500" style={{ fontSize: "80px", width: "60%", marginLeft: "auto", marginRight: "auto" }}> Expense Management</p>
          </Link>
          <div className="register-page">
            {loading && <Spinner />}
            <div className="d-flex align-items-center justify-content-center">
              <h1 data-aos="fade-right" data-aos-duration="1500" style={{ fontSize: "50px", width: "40%", marginRight: "24px" }}>
                Register to Our Smart Expense Management Platform!
              </h1>

              <Form data-aos="fade-left" data-aos-duration="1500" layout='vertical' onFinish={submitHandlers}>
                <Form.Item name='name'>
                <p style={{ color: "white", }}>Name:</p>
                  <Input />
                </Form.Item>
                <Form.Item name='email'>
                <p style={{ color: "white", }}>Email:</p>
                  <Input type='email' />
                </Form.Item>
                <Form.Item name='password'>
                <p style={{ color: "white", }}>Password:</p>
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



