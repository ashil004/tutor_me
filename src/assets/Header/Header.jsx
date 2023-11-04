import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/assignment'} > All Assignment</NavLink></li>
        <li><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>
        <li><NavLink to={'/myassignment'}>My Assignments</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl" ><span className="text-3xl font-bold text-red-300">Tutor</span><sup className="text-xl text-slate-300 font-sans">Me</sup></Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost ">
                        Login
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img className="rounded-full" src="https://i.ibb.co/xFkqKGL/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTA0-L3-Bm-LWljb240-LWppcj-Iw-Nj-Itc-G9y-LWwtam9i-N.webp"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;