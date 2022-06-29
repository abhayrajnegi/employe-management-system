import {useContext,useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../contexts/Store';
import Button from '../components/Button';

const Login = () => {
  const history = useHistory();
  const {setIsLoggedIn } = useContext(StoreContext);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

function handleEmail(e) {
  setEmail(e.target.value);
}

function handlePassword(e) {
  setPassword(e.target.value);
}

  async function handleLogin(e){
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter all fields');
    }
    
    else {
      const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
      "X-Content-Type-Options": "nosniff",
      }
       await Axios.post("http://localhost:5000/api/login", { username: email, password: password }, {headers}).then((res) => {

        if (res.data.error) {
          alert(res.data.error);

        }
        else {
          localStorage.setItem("token", res.data.token);
          setIsLoggedIn(true)
          history.push('/');
        }


      });


    }


  }

  return (
    <div className="min-h-screen flex items-center justify-center  flex-col bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full flex flex-col space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            loading="lazy" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow" width="300" height="300"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your Account</h2>

        </div>
        <form onSubmit={handleLogin} className="mt-8  space-y-6 flex gap-5 flex-col flex-wrap justify-center items-center " action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>

              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                onChange={handleEmail}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>

              <input
                id="password"
                name="password"
                type="password"
                onChange={handlePassword}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
           
            <div className="text-sm">
              <a href={'/'} className="font-medium text-red-500 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >

              Sign in
            </Button>
            {error ? <h1 className="text-center">Error</h1> : ''}
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;