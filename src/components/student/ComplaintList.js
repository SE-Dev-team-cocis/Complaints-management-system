import React from 'react'
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export default function ComplaintList({filterText}) {

    const url = " http://localhost:8000/complaints"

    const {data: complaints, isLoading} = useQuery(["complaints"], ()=>{
        return Axios.get(url).then((res)=>res.data)
    });

    if(isLoading){
        return <p className='text-center'>Loading complaints.....</p>
    }


  return (
    <div className='container p-4'>
        <table className='table table-bordered'>
            <tr>
                <th>#</th>
                <th>Course code</th>
                <th>Course unit</th>
                <th>Nature</th>
                <th>Lecturer</th>
                <th>Status</th>
                {/* <th>Details</th> */}
            </tr>
            {
               complaints?.map((complaint) => {
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
