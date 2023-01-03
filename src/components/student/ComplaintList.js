import React from 'react'
import { useEffect, useState } from 'react';

export default function ComplaintList({filterText}) {
    const [complaints, setComplaints] = useState([]);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    

    const url = " http://localhost:8000/complaints"

    function handleFilteredComplaints(complaints){
        complaints.filter((complaint) =>{
            if(complaint.status === "WITH LECTURER"){
                return complaint
            }else if(complaint.status === "PENDING"){
                return complaint
            }else if(complaint.status === "WITH HOD"){
                return complaint
            }else{
                return complaint
            }
            // if(complaint.status === filterText){
            //     return complaint
            // }
            setFilteredComplaints(complaint)
            
        })
       
        

    }
    console.log(filteredComplaints)
    useEffect(()=>{
  
      fetch(url)
      .then((res) => {
        return res.json()
      })
      .then(data=>{
        setComplaints(data);
        // handleFilteredComplaints(data)
      
        // console.log(data)
       
      })
  
    }, [])
  return (
    <div className='container p-4'>
        <table className='table table-bordered'>
            <tr>
                <th>ReferenceNo</th>
                <th>Course code</th>
                <th>Course unit</th>
                <th>Nature</th>
                <th>Lecturer</th>
                <th>Status</th>
                {/* <th>Details</th> */}
            </tr>
            {
               complaints && complaints.map((complaint) => {
                    return (
                        <tr key={complaint.id}>
                            <td className='p-1 text-center'>{complaint.id}</td>
                            <td className='p-1 text-center'>{complaint.coursecode}</td>
                            <td className='p-1'>{complaint.courseunit}</td>
                            <td className='p-1'>{complaint.nature}</td>
                            <td className='p-1'>{complaint.lecturer}</td>
                            <td className='p-1'>{complaint.status}</td>
                            {/* <td className='p-1'><a href ="#">View</a></td> */}
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}
