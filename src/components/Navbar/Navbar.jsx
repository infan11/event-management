import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../..//components/provider/AuthProvider';
const Navbar = () => {
  const {user , logOut }= useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
  const navLinks = <>
  <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  Home
</NavLink>
    {
            user ? <>
               
               
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
            
        }
         <NavLink
  to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  Product
</NavLink>
   
    
  </>
    return (
        <div data-aos="zoom-in-down" className="navbar    max-w-6xl  ">
       


        <div className="flex-1">
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
       {navLinks}
      </ul>
    </div>
         <p className="flex items-center gap-3 font-mono text-3xl font-bold text-orange-500 "> <Link to={"/"}>StarTech</Link></p>
        </div>
        <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-red-600 font-bold text-xl">
      {navLinks}
    </ul>
  </div>
        <div className="flex-none">
        
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="">
                <img className='w-10 rounded-full'  src={user?.photoURL} />
               
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
               
                  <p className='font-bold text-black'>{user?.displayName}</p>
                </a>
              </li>
              <li><a>Settings</a></li>
             
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;