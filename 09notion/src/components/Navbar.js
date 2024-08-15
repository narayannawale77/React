import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";





function Navbar(props) {
    let isLogin = props.isLogin;
    const setLogin = props.setLogin;
    return (
      <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to = "/">
            <img src = {logo} alt="Logo" width={160} height={32}></img>
        </Link>

        <nav className='text-richblack-100 flex gap-x-6'>
            <ul className="flex gap-3" >
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/Home">About</Link>
                </li>
                <li>
                    <Link to = "/Home">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Log in out sign up dash */}
        <div className='flex items-center gap-x-4'>
            {isLogin === false &&
                <Link to = "./Login">
                    <button setLogin = {setLogin} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link> 
            }
            {isLogin === false &&
                <Link to = "./Signup">
                    <button setLogin = {setLogin} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
                </Link> 
            }
            {isLogin &&
                <Link to = "/">
                    <button onClick={()=>{
                        setLogin(false);
                        toast.success("Logged Out");
                    }} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log out</button>
                </Link> 
            }
            {isLogin && 
                <Link to = "./dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link> 
            }
        </div>
        
      </div>
    );
}
  
  export default Navbar;
  