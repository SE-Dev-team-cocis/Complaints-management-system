import React from 'react'
import StudentDetails from './StudentDetails'
import CourseDetails from './CourseDetails'

import { useSelector } from 'react-redux';

function Step({ handleChange, name, email, telephone, registrationNumber, studentNumber, course, nature, semester, yearOfSitting, lecturer, coursecode, courseunit }) {
    // Getting the counter value from the reducer store
    let { complaintStep } = useSelector((state) => state.counter);

    switch (complaintStep) {
        case 1:
            return <StudentDetails handleChange={handleChange} />

        case 2:
            return (<CourseDetails handleChange={handleChange} />)

        default:
            return <StudentDetails />
    }

}

export default Step