
import swal from 'sweetalert';

const PaddingDataCard = ({ paddingData,hendelDelete }) => {
    const { _id,title, email, marks, photo, date } = paddingData;

    
    return (
        <div>
            <div className="card card-side  shadow-xl mx-auto max-w-2xl">
                <figure><img src={photo} className="w-36 h-36" alt="Movie" /></figure>
                <div className="card-body">


                    <h2 className="card-title text-red-500">{title}</h2>
                    <h2 className="font-bold text-xl text-yellow-400 dark:text-green-400" >Email: {email}</h2>
                    <h2 className="font-bold text-xl text-yellow-400 dark:text-green-400">Marks:{marks}</h2>

                    <p className="font-bold text-xl text-yellow-400 dark:text-green-400">Date:{date}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>hendelDelete(_id)} className="btn bg-violet-600 dark:bg-yellow-400  text-white hover:text-black">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaddingDataCard;