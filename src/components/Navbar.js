
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {StoreContext} from '../contexts/Store';
import {useHistory} from 'react-router-dom'; 
const Navbar = () => {
  const history = useHistory();

  const {isLoggedIn, setIsLoggedIn} = useContext(StoreContext);



    return(
        <div className="w-full min-h-50  p-4 flex-wrap flex items-center justify-around bg-black	 gap-5  ">
<div className="md:container-sm flex items-center justify-center flex-wrap ">
  <Link to="/" className="text-white text-center font-poppins">Employee Management</Link>
</div>
<div className="md:container-sm flex items-center justify-center flex-wrap flex-row
">
  <nav className="w-auto flex items-center flex-wrap flex-row m-1 justify-center text-base font-open ">



  <li className="list-none px-2">
  {isLoggedIn? <a className="text-white " href={'/'} onClick={(e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/');
  }}>Logout</a> : 
  
  
    <Link className="text-center text-white" to="/register">Register</Link> }
  </li>



  </nav>
</div>
</div>   
    )
}

export default Navbar;