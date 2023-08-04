import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form Submit
  const submitHandlers = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        values
      );
      message.success("You are logged in successfully");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(true);
      message.error("Something went wrong.");
      setLoading(false);
    }
  };
  //  Prevent Log in  user
  useEffect(() => {
    if (localStorage.getItem(`user`)) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div style={{ background: "rgb(0, 6, 27)" }}>
      <div style={{ height: "100vh", maxWidth: "1280px", marginLeft: "auto", marginRight:"auto" }}>
      <Link className="navbar-brand" to='/' >
        <p style={{ fontSize: "80px", width: "60%", marginLeft: "auto", marginRight: "auto" }}> Expense Management</p>
      </Link>
      <div className="register-page">
        {loading && <Spinner />}

        <div className="d-flex align-items-center justify-content-center">
          <h1 style={{ fontSize: "50px", width: "40%", marginRight: "24px" }}>
            Log In to Our Smart Expense Management Platform!
          </h1>
          <div>
            <Form layout="vertical" onFinish={submitHandlers}>
              <Form.Item name="email">
                <p style={{ color: "white", }}>Email:</p>
                <Input type="email" />
              </Form.Item>
              <Form.Item name="password">
                <p style={{ color: "white", }}>Password:</p>
                <Input type="password" />
              </Form.Item>
              <div className="d-flex justify-content-between g-2 ">
                <Link to="/register" className=" p-2" style={{ color: "white", }}>
                  New here? Click here to Register
                </Link>
                <button className="btn btn-primary">Log in</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </div >
    
  );
};

export default Login;
