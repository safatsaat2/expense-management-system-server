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
    <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,61,79,1) 100%)" }}>
      <div style={{ height: "100vh", maxWidth: "1280px", marginLeft: "auto", marginRight:"auto" }}>
      <Link className="navbar-brand" to='/' >
        <p data-aos="zoom-in" data-aos-duration="1500" style={{ fontSize: "80px", width: "60%", marginLeft: "auto", marginRight: "auto" }}> Expense Management</p>
      </Link>
      <div className="register-page">
        {loading && <Spinner />}

        <div className="d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-duration="1500" style={{ fontSize: "50px", width: "40%", marginRight: "24px" }}>
            Log In to Our Smart Expense Management Platform!
          </h1>
          <div>
            <Form data-aos="fade-left" data-aos-duration="1500" layout="vertical" onFinish={submitHandlers}>
            <p style={{ color: "white", }}>Email:</p>
              <Form.Item name="email">

                <Input type="email" />
              </Form.Item>
              <p style={{ color: "white", }}>Password:</p>

              <Form.Item name="password">
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
