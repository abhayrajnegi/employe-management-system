import  {useState,memo, useContext, useEffect}from 'react';

import Button from './Button';
import AddModal from './AddModal';

const {StoreContext} = require('../contexts/Store');
const Row = memo(()  => {
    const {employees,setEmployees , filteredEmployee} = useContext(StoreContext);
    const [modalOpen, setModalOpen] = useState(false);
const [search,setSearch] = useState('');

function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
}
function handleOpen(e) {
    setModalOpen(false);
}

useEffect(() => {
if(search==="" ) {
    setEmployees(filteredEmployee);
} else {
    const results =[...employees].filter(filtere =>
        filtere.name.toLowerCase().includes(search)
      );
      setEmployees(results);
    
}
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
    return(
   <div className=" w-full flex flex-row flex-wrap items-center justify-between py-5">
       <div className="container mx-md  sm:container flex flex-row flex-wrap items-center justify-around">
       <div className="flex flex-row items-center justify-center my-5 flex-wrap">
           <Button className="bg-red-700" onClick={() => setModalOpen(true)}>Add Employee</Button>
           {modalOpen?<AddModal setOpenModal={setModalOpen} setClosedModal={handleOpen}/>:null}
           </div>

           <form className="flex flex-row items-center justify-center gap-5 flex-wrap">
           <input type="text" className="p-3" value={search} placeholder="Enter Employee name" onChange={handleSearch} />
               <Button>
Search                   
               </Button>
           </form>
       </div>

      
   </div>
    )
    })
export default Row;