import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {

// Form Submit
    const submitHandlers = (values) =>{
        console.log(values)
    }

  return (
    <>
      <div className="register-page">
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
