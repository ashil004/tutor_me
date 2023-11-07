
import { data } from "autoprefixer";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatAssignment = () => {
    const fromholder = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value ;
        const marks = from . marks . value;
        const title = from . title . value;
        const photo = from . photo . value;
        const description = from . description . value;
        const date = from. date. value ;
        const Level = from.level.value;
        const pdfurl = from.pdf .value;
        const fromData  = { email, marks, title, photo, description,date, Level,pdfurl};
        console.log(fromData);

        fetch('http://localhost:5000/data',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(fromData)
            

        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
        })

        



    }

    const [datas, setDatas] = useState(null);
    
    return (
        <div>
            <h3 className="font-extrabold text-center text-5xl text-white dark:text-yellow-400"> Create  Assignment From</h3>
            <form onSubmit={fromholder}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-400 dark:text-white ">Enter Log In Email </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="email" placeholder="Enter your Log in email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-yellow-400 dark:text-white">Assignment Marks</span>
                        </label>
                        <label className="input-group">

                            <input type="number" name="marks" placeholder="Enter your Assignment marks " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* 2nd line  */}

                <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Assignment Title </span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="title" placeholder="Enter your Assignment title " className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Photo url</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="Enter your photo url  " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* 3rd line */} 

                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Assignment description</span>
                            </label>
                            <label className="input-group">

                                <textarea name="description" className="textarea  input input-bordered w-full h-64" placeholder=" Enter Assignment  description"></textarea>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Date</span>
                            </label>
                            <label className="input-group">

                               <DatePicker selected={datas} onChange={data =>setDatas(data)} dateFormat="dd/MM/yyyy" className="input input-bordered w-full"  name="date"></DatePicker>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Assignment  Level</span>
                            </label>
                            <label className="input-group">

                                <select name="level"  className="select select-bordered w-full max-w-xs">
                                    <option value="Assignment  Level" selected disabled>Assignment  Level</option>
                                    <option value="Heard">Heard</option>
                                    <option value="Normal" >Normal</option>
                                    <option value="Easy">Easy</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/* 4 line */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-yellow-400 dark:text-white">Pdf Url </span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="pdf" placeholder="Enter your pdf file link " className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                    </div>

                <input className=" my-4 btn btn-block mt-2 bg-violet-200 dark:bg-yellow-400 text-white " type="submit" value="Assignment  Creation" />

            </form>
        </div>
    )
};

export default CreatAssignment;