import SearchField from "./SearchField";
import logo_desk from '../assets/hyperflix-logo-desk.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return(
    <div className=" bg-m_darkGrey flex fixed top-0 left-0 w-full justify-between p-5 z-50">
      <div>
      <Link to='/'>
        <img className=" w-44" src={logo_desk} alt="" />
        </Link>
      </div>
      <SearchField/>
      
    </div>
  )
}

export default Navbar;