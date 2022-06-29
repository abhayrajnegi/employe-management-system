import {useContext} from 'react';
import { StoreContext } from '../contexts/Store';
import Axios from 'axios';
import Button from './Button';
import UpdateModal from './UpdateModal';
const Table = (props)  => {

    const {employees,setEmployees}  = useContext(StoreContext);
    async function deleteFriend(id) {
        await Axios.delete(`http://localhost:5000/api/employee/delete/${id}`).then(() => {
     setEmployees(employees.filter(employee => employee._id !== id))
    
  }).catch(err => console.log(err))
}

    return (
         <section className="container  my-10 p-4 mx-md md:container  flex flex-col items-center justify-center flex-wrap  overflow-auto">
        <div className="w-full  min-h-[auto]  py-3	 flex flex-row items-center justify-around gap-20 bg-gray-50   flex-wrap font-poppins  ">
            <div className="p-1 w-40 min-h-[auto]   flex items-center justify-center flex-wrap">
                <h1 className="text-center">Name</h1>
            </div>
            <div className="p-1 w-40 min-h-[auto]  flex items-center justify-center flex-wrap">
                <h1 className="text-center">Designation</h1>
            </div>
            <div className="p-1 w-[160px] min-h-[auto]   flex items-center justify-center flex-wrap ">
                <h1 className="text-center">Email</h1>
            </div>


            <div className="p-1 w-[160px] min-h-[auto] flex tems-center justify-center flex-wrap">
            <h1 className="text-center">Salary</h1>

            </div>

            <div className="p-1 w-[160px]  min-h-[auto] flex items-center justify-center flex-wrap">
            <h1 className="text-center">Actions</h1>

            </div>
        </div>
{/* eslint-disable-next-line */}
        {employees==''?<h1 className="text-center py-5 font-poppins ">Nothing to see here </h1>: (employees.map(employee => (
            <div key={employee._id} className="w-full  min-h-[auto]  	 flex flex-row items-center justify-around gap-20 bg-white flex-wrap  font-open  ">
            <div className="p-1 w-40 min-h-[100px]   flex items-center justify-center flex-wrap">
                <h4 className="text-center break-all">{employee.name}</h4>
            </div>
            <div className="p-1 w-[160px] max-w-[160px] min-h-[100px] flex items-center justify-center   flex-wrap ">
                <h4 className="text-center  break-all">{employee.designation}</h4>
            </div>
            
            








            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center flex-wrap">
                <h1 className="text-center break-all">{employee.email}</h1>
            </div>

            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center flex-wrap">
            <h4 className="text-center break-all">{employee.salary}</h4>

            </div>

            <div className="p-1 w-[160px]  min-h-[100px] flex items-center justify-center flex-wrap">
            <Button onClick={(e) => deleteFriend(employee._id)} className="mx-2">Delete</Button>
            <Button onClick={<UpdateModal></UpdateModal>} className="mx-2">Update</Button>
            </div>
        </div>
        )))} 
        


    </section>
)
        };
    

export default Table;