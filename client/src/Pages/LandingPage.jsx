import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing ">
            <div style={{ display: "flex", justifyContent: "center", alignItems: " center", gap: "80px", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingTop: "50px" }}>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <h1 style={{ color: "white", fontSize: "48px" }}>Simplify Your Finances and Save Big 😁 Discover the Ultimate Expense Management Solution!</h1>
                    <p style={{ color: "white", fontSize: "14px", marginTop: "20px" }}>
                        Welcome to our cutting-edge expense management website! Take charge of your finances with our user-friendly software. Track and control expenses seamlessly, optimize spending for maximum savings, and ensure compliance with ease. Gain valuable insights into your financial data, making informed decisions. Simplify expense management and boost your financial efficiency today!
                    </p>
                    <Link to={localStorage.getItem('user') ? '/manage' : "/login"}>
                    <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                    <img style={{ width: "600px",  }} src="https://i.ibb.co/C2yty0B/Group-1000003455-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;