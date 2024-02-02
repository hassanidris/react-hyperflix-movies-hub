import { FaSearch } from "react-icons/fa";

const SearchField = () => {
  

  return(
    <form className=" flex justify-center items-center gap-2"> 
      <input className=" rounded-full border-2 w-auto md:w-[400px] h-10 border-m_gold" type="text" />

      <FaSearch className=" text-m_gold" size={30} />
      
    </form>
  )
}

export default SearchField;