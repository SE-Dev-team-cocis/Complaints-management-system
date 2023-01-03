import { useEffect, useState } from "react";
import Header from "../Header";
import Dashboard from "./Dashboard";
import ComplaintList from "./ComplaintList";

const Complaints = () => {
  const [filterText, setFilterText] = useState("ALL")

    return ( 

        <>
        <Header />
        <div className='content'>
        <Dashboard />
  
        <div>
          <p className="text-center mt-3">Complaints history</p>
          <div className="complaints_filter">
            
            <select className="form-select w-30" name="filtered" id="" onChange={(e)=>setFilterText(e.target.value)}>
              <option value="ALL">All</option>
              <option value="PENDING">PENDING</option>
              <option value="WITH LECTURER">WITH LECTURER</option>
              <option value="WITH HOD">AT HOD</option>
            </select>
          </div>

          <p><ComplaintList filterText={filterText}/></p>
        </div>
      </div>
      </>
     );
}
 
export default Complaints;