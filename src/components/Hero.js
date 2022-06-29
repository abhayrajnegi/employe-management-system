import React from 'react';

import '../styles/modal.css';
const Row = React.lazy(() => import('./Row'));
const Table = React.lazy(() => import('./Table'));



const Hero  = () => {

    // const {employees,setEmployees,editEmployee}  = useContext(StoreContext);
    // const [employee,setEmployee]=useState({id:"",ename:"",edesignation:"",eemail:"",esalary:""});
    // const ref=useRef(null);
    // const refClose = useRef(null);

    // const updateEmployee = (currentEmployee) => {
    //     // console.log("hi");
    //     ref.current.click();
    //     setEmployee({id:currentEmployee._id,ename:currentEmployee.name,edesignation:currentEmployee.designation,eemail:currentEmployee.email,esalary:currentEmployee.salary})
    //   };

    //   const handleClick=(e)=>
    //   {   
    //       editEmployee(employee.id,employee.ename,employee.edescription,employee.eemail,employee.esalary);
    //       refClose.current.click();
    //   }
    //   const onChange=(e)=>
    //   {
    //       setEmployee({...employee,[e.target.name]:e.target.value});
    //   }

return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
};

export default Hero;
