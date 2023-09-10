import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    let navigate=useNavigate()
    const [credentials,setcredentials]=useState({email:"",password:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/auth/login/`;
    const url="https://mynotebook-dchh.onrender.com/auth/login"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });
    const json = await response.json();
    if(json.success){
        localStorage.setItem("token",json.authToken)
        navigate('/')
    }
    else{
      alert("Invalid Credentials")
    }
    console.log(json);
  };
  const onChange=(e)=>{ 
    setcredentials({...credentials,[e.target.name]:e.target.value})

  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mt-5" onSubmit={handleSubmit}>
              <h2 className="mb-4">Login</h2>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required value={credentials.email} onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  required value={credentials.password} onChange={onChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
