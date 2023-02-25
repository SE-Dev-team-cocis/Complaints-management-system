import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Field } from 'formik'


function LecturerList({ handleChange }) {

    const url = " http://localhost:8000/lecturers"

    const { data: lecturers } = useQuery(["lecturers"], async () => {
        return axios.get(url).then((res) => res.data)
    });

    return (
        <Field as="select" name="courseLecturer" className="form-select" onChange={handleChange}>
            {
                lecturers?.map((lecturer) => {
                    return (
                        <option key={lecturer.id} value={lecturer.name}>{lecturer.name}</option>
                    )
                })
            }
        </Field>
        // <>
        //     <input list="data" className="form-select" onChange={handleChange} />
        //     {/* <Field as="select" list="data" name="courseLecturer" className="form-select" onChange={handleChange}> */}

        //     <datalist id="data">

        //         {
        //             lecturers?.map((lecturer) => {
        //                 return (
        //                     <option key={lecturer.id} value={lecturer.name}>{lecturer.name}</option>
        //                 )
        //             })
        //         }
        //     </datalist>
        //     {/* </Field> */}
        // </>
    )
}

export default LecturerList