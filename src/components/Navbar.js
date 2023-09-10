import {Link,useLocation, useNavigate} from 'react-router-dom'

const Navbar=()=>{
  let location=useLocation();
  let navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">INotebook</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className={`nav-link ${location.pathname==='/'? "active" :""}`} to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className={`nav-link ${location.pathname==='/about'? "active" :""}`} to="/about">About</Link>
      </li>
    </ul>
    {!localStorage.getItem('token') ? <form className="d-flex">
      <Link className="btn btn-primary mx-2" role="submit" to='/login'>Login</Link>
      <Link className="btn btn-primary mx-2" role="submit" to='/signup'>Signup</Link>
    </form>:<Link className="btn btn-primary mx-2" onClick={handleLogout}>Logout</Link>}
  </div>
</nav>
    )
}

export default Navbar