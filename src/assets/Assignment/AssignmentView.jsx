import { useLoaderData } from "react-router-dom";


const AssignmentView = () => {
    const assignmentViewId = useLoaderData();
    const { title, description, photo, date, pdf, level, marks } = assignmentViewId;
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white dark:text-yellow-400">{title}</h1>
                        <div className="my-2">
                        <h3 className="text-white dark:text-yellow-400">Pdf Link: {pdf}</h3>
                        <h3 className="text-white dark:text-yellow-400"> Date: {date}</h3>
                        <h3 className="text-white dark:text-yellow-400"> Level: {level}</h3>
                        <h3 className="text-white dark:text-yellow-400"> Marks: {marks}</h3>
                        </div>
                        <p className="py-6 text-red-600 dark:text-white">{description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentView;