import React from 'react'
// import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function ComplaintList({filterText}) {
    const url = " http://localhost:8000/complaints"

    const { data, isLoading, isError, refetch } = useQuery(["complaints"], () =>{
        return Axios.get(url).then((res) => res.data)
    })

    if(isError){
        return <p className='mt-2 text-center fs-4'>Sorry, there was an error</p>
    }
    if(isLoading){
        return <p className='mt-2 text-center fs-4'>Loading complaints....</p>
    }

    function handleFilteredComplaints(data){
        data.filter((complaint) =>{
            if(complaint.status === "WITH LECTURER"){
                return complaint
            }else if(complaint.status === "PENDING"){
                return complaint
            }else if(complaint.status === "WITH HOD"){
                return complaint
            }else{
                return complaint
            }
        
        })
       
        

    }

  return (
    <div className='container p-4'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Code</th>
                    <th>Course unit</th>
                    <th>Nature</th>
                    <th>Lecturer</th>
                    <th>Status</th>
                    {/* <th>Details</th> */}
                </tr>
            </thead>
       
            <tbody>
            {

            //    complaints && complaints.map((complaint) => {
                data && data.map((complaint) => {
                    return (
                        <tr key={complaint.id}>
                            <td className='p-1 text-center'>{complaint.id}</td>
                            <td className='p-1'>{complaint.coursecode}</td>
                            <td className='p-1'>{complaint.courseunit}</td>
                            <td className='p-1'>{complaint.nature}</td>
                            <td className='p-1'>{complaint.lecturer}</td>
                            <td className='p-1'>{complaint.status}</td>
                            {/* <td className='p-1'><a href ="#">View</a></td> */}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}
