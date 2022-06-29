import {useContext,useState ,memo } from 'react'
import { StoreContext } from '../contexts/Store';
import Axios from 'axios';
import '../styles/modal.css';

const UpdateModal =memo(({ setOpenModal ,setClosedModal}) =>  {
  // Declare states for form
  const {employees,setEmployees}  = useContext(StoreContext);
const [name,setName] = useState('');
const [designation,setDesignation] = useState('');
const [email,setEmail] = useState('');
const [salary,setSalary] = useState('');


function handleName(e) {
  setName(e.target.value);
}
function handleDesignation(e) {
  setDesignation(e.target.value);
}
function handleEmail(e) {
  setEmail(e.target.value);
}

function handleSalary(e) {
  setSalary(e.target.value);
}




async function updateEmployee (e){
  e.preventDefault();
if(name==="" || designation==="" || email==="" || salary===""){
  alert("Please fill all the fields");
}
else {


const headers = {
  'Content-Type' : 'application/json',
  'Accept' : 'application/json',
  "x-access-token": localStorage.getItem("token"),
"X-Content-Type-Options": "nosniff",
}

 await Axios.post("http://localhost:5000/api/employee/store", {
  name:name,
  designation:designation,
  email:email,
  salary:salary
 }, { headers })
.then(res => {
if(res.data!=={}) {
  setEmployees(employees => [...employees, res.data]);
  setName('');
  setDesignation('');
  setEmail('');
  setSalary('');
  setOpenModal(true);
  setClosedModal(false);
}
else {
  setEmployees(employees);

}

}).catch(err=> {
  console.log(err);
})
 }

}

    return (
      <div className="modalBackground">
        <div className="modalContainer">


        <div className="modalTitle">Update Employee</div>

        <div className="modalBody">
        <form type="submit">
        
        <input type="text" onChange={handleName} placeholder="Employee Name" required/>
<input type="text" onChange={handleDesignation}  placeholder="Employee Designation" required />
<input type="text" onChange={handleEmail}   placeholder="Employee Email" required/>
<input type="number" onChange={handleSalary}   placeholder="Employee Salary" required />


        </form>
        </div>

<div className="modalRow">
<div className="modalButtons">
<button className="btn-base createBtn" onClick={updateEmployee}>
Update
</button>
<button className="btn-base deleteBtn"  onClick={setClosedModal}>
    Close
    </button>
</div>

</div>
          

        </div>
      </div>
    );
  });
  

  
  export default UpdateModal;