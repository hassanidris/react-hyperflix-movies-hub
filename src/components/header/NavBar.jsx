import SearchField from "./SearchField";
import logo_desk from "../../assets/hyperflix-logo-desk.png";
import logo_mob from "../../assets/hyperflix-logo-mob.png";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" bg-m_darkGrey flex items-center top-0 left-0 w-full justify-between gap-3 p-5 z-50">
        <div>
          <Link to="/">
            <img className=" hidden sm:block w-44" src={logo_desk} alt="" />
            <img className=" block sm:hidden w-12" src={logo_mob} alt="" />
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-4">
          <SearchField />
        </div>
        {user?.email ? (
          <div className=" flex">
            <Link to="/account">
              <button className=" capitalize text-m_gold py-2 px-4 cursor-pointer text-sm hover:text-m_white">
                <VscAccount size={30} />
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className=" capitalize text-m_white bg-m_gold hover:bg-m_darkGrey hover:text-m_gold border border-m_gold font-medium rounded-lg text-sm px-4 py-1"
            >
              logout
            </button>
          </div>
        ) : (
          <div className=" flex">
            <Link to="/login">
              <button className=" capitalize text-m_gold py-2 px-4 cursor-pointer text-sm hover:text-m_white">
                login
              </button>
            </Link>
            <Link to="/signup">
              <button className=" capitalize text-m_white bg-m_gold hover:bg-m_darkGrey hover:text-m_gold border border-m_gold font-medium rounded-lg text-sm px-4 py-2">
                sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
