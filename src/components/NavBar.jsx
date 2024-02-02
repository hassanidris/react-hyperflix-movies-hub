import SearchField from "./SearchField";
import {FaHeart, FaRegHeart } from 'react-icons/fa';
import logo_desk from '../assets/hyperflix-logo-desk.png';
import logo_mob from '../assets/hyperflix-logo-mob.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return(
    <div className=" bg-m_darkGrey flex fixed top-0 left-0 w-full justify-between p-5 z-50">
      <div>
      <Link to='/'>
        <img className=" hidden sm:block w-44" src={logo_desk} alt="" />
        <img className=" block sm:hidden w-12" src={logo_mob} alt="" />
        </Link>
      </div>
      <div className=" flex justify-center items-center gap-2">
        <SearchField/>
        <span> | </span>
      <FaRegHeart size={30} className=" text-m_gold" />
      </div>
      
    </div>
  )
}

export default Navbar;