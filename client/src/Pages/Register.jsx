import {Form, Input} from 'antd'
import { Link } from 'react-router-dom';

const Register = () => {


// Form Submit
    const submitHandlers = (values) =>{
        console.log(values)
    }


  return (
    <>
      <div className="register-page">
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
