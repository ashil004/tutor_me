import { useEffect } from "react";
import { useState } from "react";
import AssignmentCard from "./AssignmentCard";


const Assignment = () => {
    const [assignmentsData , setAssignmentsData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res =>res.json())
        .then(data => setAssignmentsData(data));
    },[])
    return (
        <div className="my-4">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                assignmentsData.map(assignmentData =><AssignmentCard key={assignmentData._id} assignmentData ={ assignmentData} ></AssignmentCard>)
            }
            </div>
        </div>
    );
};

export default Assignment;