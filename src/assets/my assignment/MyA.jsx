

import { data } from "autoprefixer";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyA = () => {
    const [datas , setDatas] =useState(null);
    return (
        <div>
            <div className="my-10">
                <h3 className="font-extrabold text-center text-5xl text-white dark:text-yellow-400"> My Assignment From</h3>
                <from>
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

                                <select name="level" className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Heard</option>
                                    <option>Normal</option>
                                    <option>Easy</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <input className="btn btn-block mt-2 bg-violet-200 dark:bg-yellow-400 text-white " type="submit" value="Assignment  Updating" />



                </from>
            </div>
        </div>
    );
};

export default MyA;