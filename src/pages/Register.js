import  {useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import Button from '../components/Button';

 
const Register = () => {
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [phone,setPhone] = useState(0);

   const [password,setPassword] = useState('');
   const [error,setError] = useState('');
   const history = useHistory();


   
function handleName(e) {
    setName(e.target.value);
}

function handleEmail(e) {
    setEmail(e.target.value);
}

function handlePhone(e) {
    setPhone(e.target.value);
}
function handlePassword(e) {
    setPassword(e.target.value);
}

async  function handleRegister(e){
  e.preventDefault();
 if(name === '' || password === '' || email === '' || phone === 0){
   setError('Please enter all fields');
 }else {
  const headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  "X-Content-Type-Options": "nosniff",
  }
   
  const res = await Axios.post("http://localhost:5000/api/register" ,{name:name,email:email, phone:phone,password:password} , {headers});
  if(res.data.error) {
    alert(res.data.error);
  } else {
    alert('You registered successfully');
    history.push('/');
  }

 }
}                







  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow" width="250" height="250"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
 
        </div>
        <form onSubmit={handleRegister} className="mt-8 flex flex-col items-center justify-center space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="email"
                onChange={handleName}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleEmail}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>

              <input
                id="phone"
                name="phone"
                type="number"
                autoComplete="number"
                pattern=".{8,}"
                onChange={handlePhone}
                required title="8 characters minimum for phone number"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
              />
            </div>
            <div>

              <input
                id="password"
                pattern=".{8,}"   required title="8 characters minimum"
                name="password"
                type="password"
                onChange={handlePassword}
                autoComplete="current-password"
                
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >

              Sign Up
            </Button>
           {error? <h1 className="text-center">Error</h1>:''}
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register;