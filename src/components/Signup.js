import { useState} from "react";
import {useNavigate} from 'react-router-dom';
const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({name:"",email: "", password: "",cpassword:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,cpassword}=credentials
    // const url = `http://localhost:5000/auth/register/`;
    const url="https://mynotebook-dchh.onrender.com/auth/register"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      navigate("/");
    } else {
      alert("something went wrong")
    }
    console.log(json);
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mt-5" onSubmit={handleSubmit}>
              <h2 className="mb-4">Sign Up</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={onChange}
                  id="email"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={onChange}
                  placeholder="Enter Your Password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={onChange}
                  id="confirmPassword"
                  placeholder="Confirm Your Password"
                  name="cpassword"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
