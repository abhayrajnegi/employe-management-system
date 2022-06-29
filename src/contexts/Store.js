import {useEffect, useState, createContext , useMemo, memo} from 'react';
import axios from 'axios';
export const StoreContext = createContext();
const StoreProvider = memo((props) => {
    const token =localStorage.getItem('token');
    const [employees, setEmployees] = useState([]);
const [filteredEmployee,setFilteredEmployee]=  useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
async function getEmployees() {

    if(token){
        setIsLoggedIn(true);

        await axios.get("http://localhost:5000/api/employee", {
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "x-access-token": token,
            "X-Content-Type-Options": "nosniff",

          },
        }).then(res => {
            setEmployees(res.data);
            setFilteredEmployee(res.data);




        }).catch(err => {
            console.log(err);
        })
    }
    else {
        setIsLoggedIn(false);
    }


}
getEmployees();
    },[token]);


    //edit a note
//   const editEmployee = async (id, name, designation, email , salary) => {
//     const response = await fetch(
//       `http://localhost:5000/api/employee/update/${id}`,
//       {
//         method: "PUT", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token":
//             localStorage.getItem('token'),
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({name,designation,email,salary}), // body data type must match "Content-Type" header
//       }
//     );
//     const json =await response.json(); // parses JSON response into native JavaScript objects
//     console.log(json);

//     let newEmployee=JSON.parse(JSON.stringify(employees));
//     for (let i = 0; i < newEmployee.length; i++) {
//       const employee = newEmployee[i];
//       if (employee._id === id) {
//         newEmployee[i].name = name;
//         newEmployee[i].designation = designation;
//         newEmployee[i].email = email;
//         newEmployee[i].salary = salary;
//         break;
//       }
//     }
//       setEmployees(newEmployee);
//       setFilteredEmployee(newEmployee);

//   };




    const value = useMemo(() => ({
        employees,
     setEmployees,
     isLoggedIn,
     setIsLoggedIn,
     filteredEmployee,
     setFilteredEmployee
      }), [employees, isLoggedIn , filteredEmployee ])




return(
    <StoreContext.Provider value={value}>
        {props.children}
    </StoreContext.Provider>
)
});

export default StoreProvider;