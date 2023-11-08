import { Link } from "react-router-dom";


const AssignmentCard = ({ assignmentData }) => {
    const { photo, title, level,_id,marks} = assignmentData ;
    return (
        <div>
            <div className="card w-96 h-[500px] glass">
                <figure><img src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-bold text-xl text-white dark:text-yellow-400 " > Level:{level}</p>
                    <p className="font-bold text-xl text-white dark:text-yellow-400 " > Marks:{marks}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/myassignment/${_id}`} ><button className="btn bg-violet-600 dark:bg-yellow-400  text-white hover:text-black" >update</button></Link>
                        <Link to={`/viewid/${_id}`}><button className=" btn bg-violet-600 dark:bg-yellow-400  text-white hover:text-black">Learn now!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;