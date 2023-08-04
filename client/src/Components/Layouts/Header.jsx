import { message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const [loguser, setLoguser] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setLoguser(user)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    message.success("Log out successfully!")
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" style={{ maxWidth: "1280px" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to='/'>
              Expense Management
            </Link>
            <ul className="navbar-nav ms-auto" style={{ marginRight: "40%" }}>
              <li className="nav-item">
                {" "}
                <p className="nav-link">{loguser && loguser.name}</p>{" "}
              </li>
              <Link to='/'>
                <li className="nav-item">
                  {" "}
                  <p className="nav-link">Home</p>{" "}
                </li>
              </Link>
              <Link to='/manage'>
              <li className="nav-item">
                {" "}
                <p className="nav-link">Manage Expense</p>{" "}
              </li>
              </Link>
            </ul>
            {
              loguser ? <>
              <button className="btn btn-primary" onClick={handleLogout}>
              Log out
              </button>
              </>
              :
              <>
              <Link to='/login'>
              <button className="btn btn-primary">
              Log in
              </button>
              </Link>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
